export default [
    {
        path: '/support-cases',
        name: 'support-cases',
        component: () => import('@/views/supportcases/Case.vue'),
    },
    {
        path: '/support-cases/add/',
        name: 'support-cases-add',
        component: () => import('@/views/supportcases/CaseAdd.vue'),
    },
]
