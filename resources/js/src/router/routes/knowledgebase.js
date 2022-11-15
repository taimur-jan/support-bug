export default [
    {
        path: '/knowledge-base',
        name: 'knowledge-base',
        component: () => import('@/views/knowledgebase/KnowledgeBase.vue'),
        meta: {
            pageTitle: 'Knowledge Base',
            breadcrumb: [
                {
                text: 'Knowledge Base',
                active: true,
                },
            ],
        },
    },
    {
        path: '/knowledge-base/:category',
        name: 'knowledge-base-category',
        component: () => import('@/views/knowledgebase/KnowledgeBaseCategory.vue'),
        meta: {
            pageTitle: 'Category',
            breadcrumb: [
                {
                text: 'Knowledge Base',
                to: '/Knowledge-base',
                },
                {
                text: 'Category',
                active: true,
                },
            ],
            navActiveLink: 'knowledge-base',
        },
    },
    {
        path: '/knowledge-base/:category/:slug',
        name: 'knowledge-base-question',
        component: () => import('@/views/knowledgebase/KnowledgeBaseCategoryQuestion.vue'),
        meta: {
            pageTitle: 'Question',
            breadcrumb: [
                {
                text: 'Knowledge Base',
                to: '/Knowledge-base',
                },
                {
                text: 'Category',
                to: '/Knowledge-base/category',
                },
                {
                text: 'Question',
                active: true,
                },
            ],
            navActiveLink: 'knowledge-base',
        },
    },
]
