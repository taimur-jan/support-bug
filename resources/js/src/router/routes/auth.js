export default[
    // *===============================================---*
    // *--------- Auth Routes ---- ---------------------------------------*
    // *===============================================---*
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/auth/Login.vue'),
        meta: {
            layout: 'full',
            middleware:"guest",
            pageTitle:"Login"
        },
    },
    {
        name:"register",
        path:"/register",
        component: () => import('@/views/auth/Register.vue'),
        meta:{
            layout: 'full',
            middleware:"guest",
            pageTitle:"Register"
        }
    },
    {
        name:"forgot-password",
        path:"/forgotpassword",
        component: () => import('@/views/auth/ForgotPassword.vue'),
        meta:{
            layout: 'full',
            middleware:"guest",
            pageTitle:"ForgotPassword"
        }
    },
    {
        name:"reset-password",
        path:"/resetpassword",
        component: () => import('@/views/auth/ResetPassword.vue'),
        meta:{
            layout: 'full',
            middleware:"guest",
            pageTitle:"ResetPassword"
        }
    },
]
