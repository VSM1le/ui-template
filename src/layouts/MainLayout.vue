<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered>
      <q-toolbar class="q-px-md">
        <q-btn
          flat
          round
          dense
          icon="sym_o_menu"
          aria-label="Toggle sidebar"
          @click="toggleSidebar"
        />

        <AppBreadcrumbs class="gt-xs q-ml-sm" />

        <q-space />

        <div class="row items-center no-wrap q-gutter-x-sm">
          <q-input
            v-model="search"
            dense
            outlined
            placeholder="Search…"
            class="gt-sm"
            style="width: 240px"
          >
            <template #prepend>
              <q-icon name="sym_o_search" size="20px" />
            </template>
          </q-input>
          <q-btn
            flat
            round
            dense
            icon="sym_o_search"
            class="lt-md"
            aria-label="Search"
          />

          <UserMenu :user="currentUser" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawerOpen"
      show-if-above
      dark
      class="app-sidebar"
      :mini="isMini"
      :width="240"
      :mini-width="64"
    >
      <div class="column no-wrap full-height">
        <div class="app-brand row items-center no-wrap q-px-md q-gutter-x-sm">
          <q-avatar
            size="32px"
            rounded
            color="white"
            text-color="primary"
            icon="sym_o_grid_view"
          />
          <div v-if="!isMini" class="text-subtitle1 text-weight-medium">
            Admin
          </div>
        </div>

        <q-scroll-area class="col">
          <SidebarNav :groups="navigation" :mini="isMini" />
        </q-scroll-area>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useQuasar } from 'quasar'
import AppBreadcrumbs from '@/components/layout/AppBreadcrumbs.vue'
import SidebarNav from '@/components/layout/SidebarNav.vue'
import UserMenu from '@/components/layout/UserMenu.vue'
import { currentUser } from '@/mocks/user'
import { navigation } from '@/router/navigation'

const $q = useQuasar()

const drawerOpen = ref(false)
const mini = ref(false)
const search = ref('')

// Mini mode only applies on desktop; the mobile drawer is always full width
const isMini = computed(() => mini.value && $q.screen.gt.sm)

function toggleSidebar() {
  if ($q.screen.gt.sm) {
    mini.value = !mini.value
  } else {
    drawerOpen.value = !drawerOpen.value
  }
}
</script>
