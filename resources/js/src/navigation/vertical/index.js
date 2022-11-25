export default [
  {
    title: 'Dashboard',
    route: 'dashboard',
    icon: 'HomeIcon',
  },
  {
    title: 'Case History',
    route: 'cases-list',
    icon: 'TagIcon',
  },
  {
    title: 'Knowledge Base',
    route: 'knowledge-base',
    icon: 'SearchIcon',
  },
  {
    title: 'Chat',
    route: 'chat',
    icon: 'MessageSquareIcon',
  },
  {
    title: 'User',
    route: 'users-list',
    icon: 'UserIcon',
  },
  {
    title: 'Asset Management',
    icon: 'ArchiveIcon',
    children: [
      {
        title: 'Asset Category',
        route: 'assets-list',
      },
      {
        title: 'Asset SubCategory',
        route: 'assets-list',
      },
      {
        title: 'Asset SubSubCategory',
        route: 'assets-list',
      },
    ],
  },
]
