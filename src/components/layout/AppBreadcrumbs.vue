<template>
  <q-breadcrumbs gutter="xs" class="text-body2">
    <template #separator>
      <q-icon name="sym_o_chevron_right" size="16px" class="text-muted" />
    </template>
    <q-breadcrumbs-el
      v-for="crumb in crumbs"
      :key="crumb.label"
      :label="crumb.label"
      :class="crumb.current ? 'text-weight-medium' : 'text-muted'"
    />
  </q-breadcrumbs>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const crumbs = computed(() => {
  const { group, parent, title } = route.meta
  return [
    group && { label: group, current: false },
    parent && { label: parent, current: false },
    title && { label: title, current: true }
  ].filter(Boolean)
})
</script>
