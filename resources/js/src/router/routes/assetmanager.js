export default[
    // *===============================================---*
  // *--------- Asset Manager ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/assets/list',
    name: 'assets-list',
    component: () => import('@/views/assetmanager/assetsList.vue'),
  },
//   {
//     path: '/assets/view/:id',
//     name: 'assets-view',
//     component: () => import('@/views/assetmanager/assetsView.vue'),
//   },
//   {
//     path: '/assets/edit/:id',
//     name: 'assets-edit',
//     component: () => import('@/views/assetmanager/assetsEdit.vue'),
//   },
]
