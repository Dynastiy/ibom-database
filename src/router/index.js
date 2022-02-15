import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/layouts/dashboard.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        children: [{
                path: '/',
                name: 'Dashboard',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/dashboard/index.vue')
            },
            {
                path: '/dashboard/staffs',
                name: 'All Staffs',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/staffs/index.vue')
            },
            {
                path: '/dashboard/staffs/add-staff',
                name: 'User Onboarding',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/staffs/add-staff.vue')
            },
            {
                path: '/dashboard/send-message',
                name: 'Create Document',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/messages/compose.vue')
            },
            {
                path: '/dashboard/my-office',
                name: 'All Messages',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/messages/index.vue'),
                children: [{
                        path: '/',
                        name: 'Dashboard',
                        // route level code-splitting
                        // this generates a separate chunk (about.[hash].js) for this route
                        // which is lazy-loaded when the route is visited.
                        component: () =>
                            import ( /* webpackChunkName: "about" */ '../views/pages/dashboard/index.vue')
                    },
                    {
                        path: '/dashboard/staffs',
                        name: 'All Staffs',
                        // route level code-splitting
                        // this generates a separate chunk (about.[hash].js) for this route
                        // which is lazy-loaded when the route is visited.
                        component: () =>
                            import ( /* webpackChunkName: "about" */ '../views/pages/staffs/index.vue')
                    },
                    {
                        path: '/dashboard/send-message',
                        name: 'Create Document',
                        // route level code-splitting
                        // this generates a separate chunk (about.[hash].js) for this route
                        // which is lazy-loaded when the route is visited.
                        component: () =>
                            import ( /* webpackChunkName: "about" */ '../views/pages/messages/compose.vue')
                    },
                    {
                        path: '/dashboard/departments',
                        name: 'Departments',
                        // route level code-splitting
                        // this generates a separate chunk (about.[hash].js) for this route
                        // which is lazy-loaded when the route is visited.
                        component: () =>
                            import ( /* webpackChunkName: "about" */ '../views/pages/departments/index.vue')
                    },
                    {
                        path: '/dashboard/my-office',
                        name: 'All Messages',
                        // route level code-splitting
                        // this generates a separate chunk (about.[hash].js) for this route
                        // which is lazy-loaded when the route is visited.
                        component: () =>
                            import ( /* webpackChunkName: "about" */ '../views/pages/messages/index.vue'),
                        children: [{
                                path: '/dashboard/my-office',
                                name: 'My Office',
                                // route level code-splitting
                                // this generates a separate chunk (about.[hash].js) for this route
                                // which is lazy-loaded when the route is visited.
                                component: () =>
                                    import ( /* webpackChunkName: "about" */ '../views/pages/messages/home.vue')
                            },
                            {
                                path: '/dashboard/my-office/:id',
                                name: 'Message',
                                // route level code-splitting
                                // this generates a separate chunk (about.[hash].js) for this route
                                // which is lazy-loaded when the route is visited.
                                component: () =>
                                    import ( /* webpackChunkName: "about" */ '../views/pages/messages/_id.vue')
                            },
                        ]
                    },
                    {
                        path: '/dashboard/meeting-room',
                        name: 'Meeting Room',
                        // route level code-splitting
                        // this generates a separate chunk (about.[hash].js) for this route
                        // which is lazy-loaded when the route is visited.
                        component: () =>
                            import ( /* webpackChunkName: "about" */ '../views/pages/chat/index.vue')
                    },
                    {
                        path: '/dashboard/profile',
                        name: 'Profile',
                        // route level code-splitting
                        // this generates a separate chunk (about.[hash].js) for this route
                        // which is lazy-loaded when the route is visited.
                        component: () =>
                            import ( /* webpackChunkName: "about" */ '../views/pages/profile/index.vue')
                    },
                    {

                        path: '/dashboard/my-office',
                        name: 'My Office',
                        // route level code-splitting
                        // this generates a separate chunk (about.[hash].js) for this route
                        // which is lazy-loaded when the route is visited.
                        component: () =>
                            import ( /* webpackChunkName: "about" */ '../views/pages/messages/home.vue')
                    },
                    {
                        path: '/dashboard/my-office/:id',
                        name: 'Message',
                        // route level code-splitting
                        // this generates a separate chunk (about.[hash].js) for this route
                        // which is lazy-loaded when the route is visited.
                        component: () =>
                            import ( /* webpackChunkName: "about" */ '../views/pages/messages/_id.vue')
                    },
                ]
            },
            {
                path: '/dashboard/notifications',
                name: 'All Notifications',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/notifications/index.vue')
            },
            {
                path: '/dashboard/chat',
                name: 'Chat',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/chat/index.vue')
            },
            {
                path: '/dashboard/profile',
                name: 'Profile',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/profile/index.vue')
            }


        ]
    },
    {
        path: '/signin',
        name: 'Sign In',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/auth/signin.vue')
    },
    {
        path: '/signin',
        name: 'Sign In',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/auth/signin.vue')
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    routes
})

export default router