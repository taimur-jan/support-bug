export default[
    // *===============================================---*
  // *--------- USER ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/users/list',
    name: 'users-list',
    component: () => import('@/views/user/users-list/UsersList.vue'),
  },
  {
    path: '/users/view/:id',
    name: 'users-view',
    component: () => import('@/views/user/users-view/UsersView.vue'),
  },
  {
    path: '/users/edit/:id',
    name: 'users-edit',
    component: () => import('@/views/user/users-edit/UsersEdit.vue'),
  },

]
