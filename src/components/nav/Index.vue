<template>
    <nav-component 
    :routes="routes"/>
</template>
<script>
export default {
    computed: {
        routes() {
            return [
                {
                    model_name: 'partner',
                },
                {
                    model_name: 'partner_payment',
                },
                {
                    model_name: 'service',
                },
                {
                    model_name: 'provider',
                },
            ]
        }
    },
    components: {
        NavComponent: () => import('@/common-vue/components/nav/Index'),
    }
}
</script>