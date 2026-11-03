<template>
  <q-list class="q-px-sm q-py-md">
    <template v-for="(group, index) in props.groups" :key="group.label">
      <q-item-label
        v-if="!props.mini"
        header
        class="text-caption text-sidebar-muted q-px-md q-pt-md q-pb-xs"
        :class="{ 'q-pt-none': index === 0 }"
      >
        {{ group.label }}
      </q-item-label>
      <q-separator v-else-if="index > 0" class="q-my-sm" />

      <template v-for="item in group.items" :key="item.label">
        <!-- Submenu, collapsed sidebar: icon opens a flyout menu -->
        <q-item
          v-if="item.children && props.mini"
          clickable
          dense
          class="app-nav-item rounded-borders q-my-xs"
          :class="{ 'app-nav-item--active': hasActiveChild(item) }"
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" size="20px" />
          </q-item-section>

          <q-menu
            anchor="top right"
            self="top left"
            :offset="[12, 0]"
            transition-show="jump-right"
            transition-hide="jump-left"
          >
            <q-list dense style="min-width: 180px" class="q-py-xs">
              <q-item-label header class="text-caption text-muted q-py-sm">
                {{ item.label }}
              </q-item-label>
              <q-item
                v-for="child in item.children"
                :key="child.route"
                v-close-popup
                :to="{ name: child.route }"
                exact
                clickable
                active-class="bg-hover text-weight-medium"
              >
                <q-item-section>{{ child.label }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-item>

        <!-- Submenu, expanded sidebar: expands in place -->
        <q-expansion-item
          v-else-if="item.children"
          v-model="opened[item.label]"
          dense
          :header-class="[
            'app-nav-item rounded-borders q-my-xs',
            { 'app-nav-item--current text-weight-medium': hasActiveChild(item) }
          ]"
          expand-icon="sym_o_expand_more"
          expand-icon-class="text-sidebar-muted"
        >
          <template #header>
            <q-item-section avatar>
              <q-icon :name="item.icon" size="20px" />
            </q-item-section>
            <q-item-section>{{ item.label }}</q-item-section>
          </template>

          <q-item
            v-for="child in item.children"
            :key="child.route"
            :to="{ name: child.route }"
            exact
            clickable
            dense
            :inset-level="1"
            active-class="app-nav-item--active text-weight-medium"
            class="app-nav-item rounded-borders q-my-xs"
          >
            <q-item-section>{{ child.label }}</q-item-section>
          </q-item>
        </q-expansion-item>

        <!-- Plain link -->
        <q-item
          v-else
          :to="{ name: item.route }"
          exact
          clickable
          dense
          active-class="app-nav-item--active text-weight-medium"
          class="app-nav-item rounded-borders q-my-xs"
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" size="20px" />
          </q-item-section>
          <q-item-section>{{ item.label }}</q-item-section>

          <q-tooltip v-if="props.mini" anchor="center right" self="center left">
            {{ item.label }}
          </q-tooltip>
        </q-item>
      </template>
    </template>
  </q-list>
</template>

<script setup>
import { reactive, watch } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  groups: {
    type: Array,
    required: true
  },
  mini: {
    type: Boolean,
    default: false
  }
})

const route = useRoute()

// Open/closed state per submenu, keyed by label
const opened = reactive({})

function hasActiveChild(item) {
  return item.children.some(child => child.route === route.name)
}

// Open the submenu that holds the current route (others keep their state)
watch(
  () => route.name,
  () => {
    for (const group of props.groups) {
      for (const item of group.items) {
        if (item.children && hasActiveChild(item)) opened[item.label] = true
      }
    }
  },
  { immediate: true }
)
</script>
