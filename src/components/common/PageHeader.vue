<template>
  <div class="row items-center q-col-gutter-md q-mb-lg">
    <div class="col">
      <h1 class="text-h5 text-weight-medium q-my-none">{{ props.title }}</h1>
      <div v-if="props.subtitle" class="text-body2 text-muted q-mt-xs">
        {{ props.subtitle }}
      </div>
    </div>
    <div v-if="$slots.actions" class="col-auto row q-gutter-sm">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>
