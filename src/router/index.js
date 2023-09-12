import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/common-vue/views/Login')
    },
    {
        path: '/inicio',
        name: 'home',
        component: () => import('@/views/Home')
    },
    {
        path: '/socios',
        name: 'partner',
        component: () => import('@/views/Partner') 
    },
    {
        path: '/pagos-de-socios',
        name: 'partner_payment',
        component: () => import('@/views/PartnerPayment') 
    },
    {
        path: '/servicios',
        name: 'service',
        component: () => import('@/views/Service')
    },
    {
        path: '/proveedores',
        name: 'provider',
        component: () => import('@/views/Provider')
    },
    {
        path: '/configuracion/:view?/:sub_view?',
        name: 'configuration', 
        component: () => import('@/views/Configuration')
    },
    {
        path: '/recuperar-clave/:view?/:sub_view?',
        name: 'passwordReset', 
        component: () => import('@/views/PasswordReset')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
