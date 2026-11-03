<template>
  <q-page :class="$q.screen.lt.md ? 'q-pa-md' : 'q-pa-lg'">
    <PageHeader
      title="Showcase"
      subtitle="Buttons, status colors, and tables from design.md."
    />

    <div class="column no-wrap q-gutter-y-lg">
      <!-- Buttons -->
      <q-card flat bordered>
        <q-card-section>
          <div class="text-h6">Buttons</div>
          <div class="text-caption text-muted">
            One primary button per view or section.
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section class="row items-center q-gutter-md">
          <q-btn unelevated color="primary" label="Primary" />
          <q-btn outline color="primary" label="Secondary" />
          <q-btn flat color="primary" label="Tertiary" />
          <q-btn unelevated color="negative" label="Destructive" />
          <q-btn
            unelevated
            color="primary"
            icon="sym_o_add"
            label="With icon"
          />
          <q-btn unelevated color="primary" label="Disabled" disable />
          <q-btn unelevated color="primary" label="Loading" loading />
          <q-btn
            flat
            round
            dense
            icon="sym_o_more_vert"
            aria-label="More actions"
          />
        </q-card-section>
      </q-card>

      <!-- Action colors -->
      <q-card flat bordered>
        <q-card-section>
          <div class="text-h6">Action colors</div>
          <div class="text-caption text-muted">
            One action per status color, in each button variant.
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section class="column no-wrap q-gutter-y-md">
          <div v-for="variant in variants" :key="variant.name">
            <div class="text-subtitle2 text-muted q-mb-sm">
              {{ variant.name }}
            </div>
            <div class="row items-center q-gutter-md">
              <q-btn
                v-for="action in actions"
                :key="action.label"
                v-bind="variant.props"
                :color="action.color"
                :icon="action.icon"
                :label="action.label"
              />
            </div>
          </div>
        </q-card-section>
      </q-card>

      <!-- Status badges -->
      <q-card flat bordered>
        <q-card-section>
          <div class="text-h6">Status</div>
          <div class="text-caption text-muted">
            Soft-tint badges. Color appears only for status.
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section class="row items-center q-gutter-md">
          <StatusBadge
            v-for="(status, key) in orderStatuses"
            :key="key"
            :label="status.label"
            :color="status.color"
          />
        </q-card-section>
      </q-card>

      <!-- Table -->
      <q-card flat bordered>
        <q-card-section class="row items-center q-col-gutter-md">
          <div class="col-12 col-sm">
            <div class="text-h6">Recent orders</div>
            <div class="text-caption text-muted">
              {{ selected.length }} selected
            </div>
          </div>
          <div class="col-12 col-sm-auto">
            <q-tabs
              v-model="tableState"
              dense
              narrow-indicator
              align="left"
              active-color="primary"
              indicator-color="primary"
              class="text-muted"
            >
              <q-tab
                v-for="state in tableStates"
                :key="state"
                :name="state"
                :label="state"
              />
            </q-tabs>
          </div>
        </q-card-section>

        <q-card-section v-if="tableState === 'Error'" class="q-pt-none">
          <q-banner rounded inline-actions class="app-banner-negative">
            <template #avatar>
              <q-icon name="sym_o_error" color="negative" />
            </template>
            Couldn't load orders. Check your connection and try again.
            <template #action>
              <q-btn flat color="negative" label="Retry" />
            </template>
          </q-banner>
        </q-card-section>

        <q-card-section
          v-else-if="tableState === 'Loading'"
          class="q-pt-none column no-wrap q-gutter-y-sm"
        >
          <q-skeleton v-for="n in 6" :key="n" type="rect" height="32px" />
        </q-card-section>

        <q-table
          v-else
          v-model:selected="selected"
          flat
          :rows="tableState === 'Empty' ? [] : orders"
          :columns="columns"
          row-key="id"
          selection="multiple"
          :pagination="{ rowsPerPage: 5 }"
        >
          <template #body-cell-status="cell">
            <q-td :props="cell">
              <StatusBadge
                :label="orderStatuses[cell.value].label"
                :color="orderStatuses[cell.value].color"
              />
            </q-td>
          </template>

          <template #body-cell-actions="cell">
            <q-td :props="cell" class="q-gutter-x-xs">
              <q-btn
                v-for="action in rowActions"
                :key="action.label"
                flat
                round
                dense
                size="sm"
                :color="action.color"
                :icon="action.icon"
                :aria-label="action.label"
              >
                <q-tooltip>{{ action.label }}</q-tooltip>
              </q-btn>
            </q-td>
          </template>

          <template #no-data>
            <EmptyState
              class="full-width"
              icon="sym_o_receipt_long"
              title="No orders yet"
              message="New orders will show up here."
            >
              <template #action>
                <q-btn
                  unelevated
                  color="primary"
                  icon="sym_o_add"
                  label="Create order"
                />
              </template>
            </EmptyState>
          </template>
        </q-table>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import EmptyState from '@/components/common/EmptyState.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import StatusBadge from '@/components/common/StatusBadge.vue'
import { orderStatuses, orders } from '@/mocks/orders'

const variants = [
  { name: 'Unelevated', props: { unelevated: true } },
  { name: 'Outline', props: { outline: true } },
  { name: 'Flat', props: { flat: true } }
]

const actions = [
  { label: 'Approve', color: 'positive', icon: 'sym_o_check_circle' },
  { label: 'Reject', color: 'negative', icon: 'sym_o_cancel' },
  { label: 'Hold', color: 'warning', icon: 'sym_o_pause_circle' },
  { label: 'Details', color: 'info', icon: 'sym_o_info' }
]

const rowActions = [
  { label: 'View', color: 'primary', icon: 'sym_o_visibility' },
  { label: 'Edit', color: 'primary', icon: 'sym_o_edit' },
  { label: 'Delete', color: 'negative', icon: 'sym_o_delete' }
]

const tableStates = ['Data', 'Loading', 'Empty', 'Error']
const tableState = ref('Data')
const selected = ref([])

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'THB',
  currencyDisplay: 'narrowSymbol'
})

const columns = [
  { name: 'id', label: 'Order', field: 'id', align: 'left', sortable: true },
  { name: 'customer', label: 'Customer', field: 'customer', align: 'left' },
  { name: 'date', label: 'Date', field: 'date', align: 'left', sortable: true },
  {
    name: 'amount',
    label: 'Amount',
    field: 'amount',
    align: 'right',
    sortable: true,
    format: value => currency.format(value)
  },
  { name: 'status', label: 'Status', field: 'status', align: 'left' },
  { name: 'actions', label: 'Actions', field: 'id', align: 'right' }
]
</script>
