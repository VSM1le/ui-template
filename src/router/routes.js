// meta.title / meta.group / meta.parent are display text, used by breadcrumbs
// and page headers. meta.parent is the submenu a route sits under.
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('@/pages/PlaceholderPage.vue'),
        meta: { title: 'Dashboard', group: 'Overview' }
      },
      {
        path: 'reports',
        name: 'reports',
        component: () => import('@/pages/PlaceholderPage.vue'),
        meta: { title: 'Reports', group: 'Overview' }
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('@/pages/PlaceholderPage.vue'),
        meta: { title: 'All orders', group: 'Commerce', parent: 'Orders' }
      },
      {
        path: 'orders/returns',
        name: 'order-returns',
        component: () => import('@/pages/PlaceholderPage.vue'),
        meta: { title: 'Returns', group: 'Commerce', parent: 'Orders' }
      },
      {
        path: 'orders/drafts',
        name: 'order-drafts',
        component: () => import('@/pages/PlaceholderPage.vue'),
        meta: { title: 'Drafts', group: 'Commerce', parent: 'Orders' }
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('@/pages/PlaceholderPage.vue'),
        meta: { title: 'All products', group: 'Commerce', parent: 'Products' }
      },
      {
        path: 'products/categories',
        name: 'product-categories',
        component: () => import('@/pages/PlaceholderPage.vue'),
        meta: { title: 'Categories', group: 'Commerce', parent: 'Products' }
      },
      {
        path: 'products/inventory',
        name: 'product-inventory',
        component: () => import('@/pages/PlaceholderPage.vue'),
        meta: { title: 'Inventory', group: 'Commerce', parent: 'Products' }
      },
      {
        path: 'users',
        name: 'users',
        component: () => import('@/pages/PlaceholderPage.vue'),
        meta: { title: 'Users', group: 'Management' }
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import('@/pages/PlaceholderPage.vue'),
        meta: { title: 'Settings', group: 'Management' }
      },
      {
        path: 'showcase',
        name: 'showcase',
        component: () => import('@/pages/ShowcasePage.vue'),
        meta: { title: 'Showcase', group: 'Design' }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue')
  }
]

export default routes
