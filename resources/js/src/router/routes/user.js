export default[
    // *===============================================---*
  // *--------- USER ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/users/list',
    name: 'users-list',
    component: () => import('@/views/user/users-list/UsersList.vue'),
    meta: {
        middleware:"auth",
    },
  },
  {
    path: '/users/view/:id',
    name: 'users-view',
    component: () => import('@/views/user/users-view/UsersView.vue'),
    meta: {
        middleware:"auth",
    },
  },
  {
    path: '/users/edit/:id',
    name: 'users-edit',
    component: () => import('@/views/user/users-edit/UsersEdit.vue'),
    meta: {
        middleware:"auth",
    },
  },

]
