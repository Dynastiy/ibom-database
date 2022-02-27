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
                path: '/dashboard/staff/:id',
                name: 'Staff',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/staffs/_id.vue')
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
                name: 'My Office',
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
                path: '/dashboard/departments',
                name: 'Departments',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/departments/index.vue')
            },
            {
                path: '/dashboard/meeting-room',
                name: 'Meeting Room',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/chat/index.vue'),
                    children:[
                          {
                path: '/dashboard/meeting-room',
                name: 'Meeting Room',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/chat/chat-area/index.vue'),
                          },
                    ]
            },
            {
                path: '/dashboard/settings',
                name: 'Settings',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/pages/settings/index.vue'),
                    children:[
                        {
                            path: '/dashboard/settings',
                            name: 'Settings',
                            // route level code-splitting
                            // this generates a separate chunk (about.[hash].js) for this route
                            // which is lazy-loaded when the route is visited.
                            component: () =>
                                import ( /* webpackChunkName: "about" */ '../views/pages/settings/profile/index.vue')
                        },
                        {
                            path: '/dashboard/settings/roles',
                            name: 'Settings',
                            // route level code-splitting
                            // this generates a separate chunk (about.[hash].js) for this route
                            // which is lazy-loaded when the route is visited.
                            component: () =>
                                import ( /* webpackChunkName: "about" */ '../views/pages/settings/roles/index.vue')
                        },
                        {
                            path: '/dashboard/settings/departments',
                            name: 'Settings',
                            // route level code-splitting
                            // this generates a separate chunk (about.[hash].js) for this route
                            // which is lazy-loaded when the route is visited.
                            component: () =>
                                import ( /* webpackChunkName: "about" */ '../views/pages/settings/departments/index.vue')
                        },
                    ]
            },
        ],

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