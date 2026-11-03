<template>
  <q-page :class="$q.screen.lt.md ? 'q-pa-md' : 'q-pa-lg'">
    <PageHeader :title="route.meta.title" />

    <q-card flat bordered>
      <EmptyState
        icon="sym_o_draft"
        title="Nothing here yet"
        message="This page is waiting for its spec in docs/requirements."
      />
    </q-card>
  </q-page>
</template>

<script setup>
import { useRoute } from 'vue-router'
import EmptyState from '@/components/common/EmptyState.vue'
import PageHeader from '@/components/common/PageHeader.vue'

const route = useRoute()
</script>
