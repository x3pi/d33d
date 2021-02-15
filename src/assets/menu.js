const layout = [
  {
    name: 'Flex Grid',
    path: 'grid',
    opened: true,
    children: [
      {
        name: 'Introduction to Flexbox',
        path: 'introduction-to-flexbox'
      },
      {
        name: 'Grid Row',
        path: 'row'
      },
      {
        name: 'Grid Column',
        path: 'column'
      },
      {
        name: 'Grid Gutter',
        path: 'gutter'
      },
      {
        name: 'Flexbox patterns',
        path: 'flexbox-patterns'
      },
      {
        name: 'Flex Playground',
        path: 'flex-playground'
      }
    ]
  },
  {
    name: 'Layout',
    path: 'layout'
  },
  {
    name: 'Routing with Layouts and Pages',
    path: 'routing-with-layouts-and-pages'
  },
  {
    name: 'Layout Header and Footer',
    path: 'header-and-footer'
  },
  {
    name: 'Layout Drawer',
    path: 'drawer'
  },
  {
    name: 'Layout Page',
    path: 'page'
  },
  {
    name: 'Layout Builder',
    external: true,
    path: '/layout-builder'
  },
  {
    name: 'Layout Gallery',
    path: 'gallery'
  },
  {
    name: 'Page Sticky',
    path: 'page-sticky'
  },
  {
    name: 'Page Scroller',
    path: 'page-scroller'
  }
]

const components = [
  {
    name: 'Virtual Scroll',
    path: 'virtual-scroll'
  }
]

module.exports = [
  {
    name: 'Why Quasar?',
    icon: 'room',
    path: 'test'
  },
  {
    name: 'Sponsors and Backers',
    icon: 'favorite',
    path: 'why-donate'
  },
  {
    name: 'Layout and Grid',
    icon: 'view_quilt',
    path: 'layout',
    children: layout
  },
  {
    name: 'Vue Components',
    icon: 'widgets',
    path: 'vue-components',
    children: components
  }
]
