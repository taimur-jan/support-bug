export default [
    {
        path: '/chat',
        name: 'chat',
        component: () => import('@/views/chat/Chat.vue'),
        meta: {
            middleware:"auth",
            contentRenderer: 'sidebar-left',
            contentClass: 'chat-application',
          },
    },
]
