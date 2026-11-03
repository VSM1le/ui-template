<template>
  <div class="fullscreen flex flex-center q-pa-md">
    <EmptyState
      icon="sym_o_explore_off"
      title="Page not found"
      message="The page you are looking for does not exist."
    >
      <template #action>
        <q-btn
          unelevated
          color="primary"
          :to="{ name: 'dashboard' }"
          label="Back to dashboard"
        />
      </template>
    </EmptyState>
  </div>
</template>

<script setup>
import EmptyState from '@/components/common/EmptyState.vue'
</script>
