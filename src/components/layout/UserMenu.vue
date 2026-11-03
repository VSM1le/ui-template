<template>
  <q-btn flat round dense aria-label="Account menu">
    <q-avatar size="32px" color="primary" text-color="white">
      <span class="text-caption text-weight-medium">{{ initials }}</span>
    </q-avatar>

    <q-menu anchor="bottom end" self="top end">
      <q-list style="min-width: 220px">
        <q-item>
          <q-item-section>
            <q-item-label class="text-weight-medium">
              {{ props.user.name }}
            </q-item-label>
            <q-item-label caption>{{ props.user.email }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item v-close-popup clickable dense>
          <q-item-section avatar>
            <q-icon name="sym_o_person" size="20px" />
          </q-item-section>
          <q-item-section>Profile</q-item-section>
        </q-item>
        <q-item v-close-popup clickable dense :to="{ name: 'settings' }">
          <q-item-section avatar>
            <q-icon name="sym_o_settings" size="20px" />
          </q-item-section>
          <q-item-section>Settings</q-item-section>
        </q-item>
        <q-separator />
        <q-item v-close-popup clickable dense>
          <q-item-section avatar>
            <q-icon name="sym_o_logout" size="20px" />
          </q-item-section>
          <q-item-section>Sign out</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const initials = computed(() =>
  props.user.name
    .split(' ')
    .map(part => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
)
</script>
