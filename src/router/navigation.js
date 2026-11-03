// Sidebar structure. `route` is a route name, `label` the display text.
// An item with `children` (each { route, label }) becomes a submenu.
export const navigation = [
  {
    label: 'Overview',
    items: [
      { route: 'dashboard', label: 'Dashboard', icon: 'sym_o_space_dashboard' },
      { route: 'reports', label: 'Reports', icon: 'sym_o_bar_chart' }
    ]
  },
  {
    label: 'Commerce',
    items: [
      {
        label: 'Orders',
        icon: 'sym_o_receipt_long',
        children: [
          { route: 'orders', label: 'All orders' },
          { route: 'order-returns', label: 'Returns' },
          { route: 'order-drafts', label: 'Drafts' }
        ]
      },
      {
        label: 'Products',
        icon: 'sym_o_inventory_2',
        children: [
          { route: 'products', label: 'All products' },
          { route: 'product-categories', label: 'Categories' },
          { route: 'product-inventory', label: 'Inventory' }
        ]
      }
    ]
  },
  {
    label: 'Management',
    items: [
      { route: 'users', label: 'Users', icon: 'sym_o_group' },
      { route: 'settings', label: 'Settings', icon: 'sym_o_settings' }
    ]
  },
  {
    label: 'Design',
    items: [{ route: 'showcase', label: 'Showcase', icon: 'sym_o_palette' }]
  }
]
