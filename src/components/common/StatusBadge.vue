<template>
  <q-badge
    class="app-badge-soft text-weight-medium"
    :text-color="props.color"
    :label="props.label"
  />
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'secondary'
  }
})
</script>
