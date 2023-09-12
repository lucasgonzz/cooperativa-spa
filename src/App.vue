<template>
    <div id="app">
        <logo-loading></logo-loading>
        <nav-component></nav-component>
        <b-container
        fluid>
            <btn-refresh-app
            v-if="new_version"></btn-refresh-app>
            <router-view/>
        </b-container>
    </div>
</template>
<script>
import LogoLoading from '@/common-vue/components/LogoLoading'
import NavComponent from '@/components/nav/Index'
import BtnRefreshApp from '@/common-vue/components/BtnRefreshApp'

import update_app from '@/common-vue/mixins/update_app'
import app from '@/common-vue/mixins/app' 
export default {
    mixins: [update_app, app],
    components: {
        LogoLoading, 
        NavComponent,
        BtnRefreshApp,
    },
    data() {
        return {
            new_version: false,
        }
    },
    created() {
        document.addEventListener(
            'swUpdated', this.showRefreshUI, { once: true }
        );
        this.redirectIfWww()
        this.$store.dispatch('auth/me')
    },
    watch: {
        authenticated() {
            console.log('watch authenticated')
            if (!this.authenticated) {
                if (this.route_name != 'passwordReset' && this.route_name != 'login') {
                    this.$router.replace({name: 'login'})
                }
            } else {
                if (this.route_name != this.route_index) {
                    this.$router.replace({name: this.route_index})
                }
                this.callMethods()
            }
        }
    },
    methods: {
        async callMethods() {
            this.$store.commit('auth/setLoading', true)
            this.updateMessage('Descargando informacion')
            
            // Aca se llaman los metodos y se va seteando el mensaje
            this.updateMessage('Descargando socios')
            await this.$store.dispatch('partner/getModels')
            this.updateMessage('Descargando servicios')
            await this.$store.dispatch('service/getModels')
            this.updateMessage('Descargando proveedores')
            await this.$store.dispatch('provider/getModels')
            
            this.$store.commit('auth/setLoading', false)
            this.updateMessage('')
        },
        updateMessage(message) {
            if (!this.there_is_update) {
                this.$store.commit('auth/setMessage', message)
            }
        },
        showRefreshUI (e) {
            console.log('Se recibio el evento desde App.vue')
            this.new_version = true
        },
        redirectIfWww() {
            if (location.href.indexOf("www.") > -1) {
                console.log('tiene www')
                location.replace(process.env.VUE_APP_APP_URL);
            }
        },
    }
}
</script>
<style lang="sass">
@import "./sass/fonts/styles.css"
@import '@/sass/app.sass'
#app 
    font-family: Roboto, Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50


.container-fluid 
    background: $background
    min-height: calc(100vh - 70px)

#nav 
    padding: 30px

    a 
        font-weight: bold
        color: #2c3e50

    &.router-link-exact-active 
        color: #42b983
    
  

</style>
