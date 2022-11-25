export default [
    {
        path: '/cases/list',
        name: 'cases-list',
        component: () => import('@/views/supportcases/cases-list/CasesList.vue'),
      },
      {
        path: '/cases/view/:id',
        name: 'cases-view',
        component: () => import('@/views/supportcases/cases-view/CasesView.vue'),
      },
      {
        path: '/cases/edit/:id',
        name: 'cases-edit',
        component: () => import('@/views/supportcases/cases-edit/CasesEdit.vue'),
      },

]
