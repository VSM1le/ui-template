<template>
  <div class="column no-wrap items-center text-center q-pa-xl q-gutter-sm">
    <q-icon :name="props.icon" size="48px" class="text-muted" />
    <div class="text-subtitle1 text-weight-medium">{{ props.title }}</div>
    <div v-if="props.message" class="text-body2 text-muted">
      {{ props.message }}
    </div>
    <div v-if="$slots.action" class="q-pt-sm">
      <slot name="action" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: 'sym_o_inbox'
  },
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    default: ''
  }
})
</script>
