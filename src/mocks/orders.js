// Status → display label + Quasar brand color (see design.md → Status badges)
export const orderStatuses = {
  paid: { label: 'Paid', color: 'positive' },
  pending: { label: 'Pending', color: 'warning' },
  processing: { label: 'Processing', color: 'info' },
  cancelled: { label: 'Cancelled', color: 'negative' },
  draft: { label: 'Draft', color: 'secondary' }
}

export const orders = [
  {
    id: 'ORD-1042',
    customer: 'Somchai Jaidee',
    date: '2026-10-14',
    amount: 12500,
    status: 'paid'
  },
  {
    id: 'ORD-1041',
    customer: 'สมหญิง รักไทย',
    date: '2026-10-14',
    amount: 3290,
    status: 'pending'
  },
  {
    id: 'ORD-1040',
    customer: 'Emily Carter',
    date: '2026-10-13',
    amount: 845,
    status: 'processing'
  },
  {
    id: 'ORD-1039',
    customer: 'บริษัท ตัวอย่าง จำกัด',
    date: '2026-10-12',
    amount: 48900,
    status: 'paid'
  },
  {
    id: 'ORD-1038',
    customer: 'Daniel Kim',
    date: '2026-10-11',
    amount: 1990,
    status: 'cancelled'
  },
  {
    id: 'ORD-1037',
    customer: 'Natthapong Srisuk',
    date: '2026-10-10',
    amount: 7600,
    status: 'draft'
  },
  {
    id: 'ORD-1036',
    customer: 'Maria Garcia',
    date: '2026-10-09',
    amount: 2250,
    status: 'pending'
  },
  {
    id: 'ORD-1035',
    customer: 'วิชัย มั่นคง',
    date: '2026-10-08',
    amount: 15800,
    status: 'paid'
  }
]
