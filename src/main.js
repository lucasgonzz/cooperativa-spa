import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Vue Scrool
Vue.prototype.$scrollToTop = (() => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, 100)
}) 

// Notifications
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.use(VueToast, {
  position: 'bottom'
});

// Bootstrap
import { BootstrapVue } from 'bootstrap-vue'
import '@/sass/_custom.scss'
Vue.use(BootstrapVue)

// Axios
import axios from 'axios'
Vue.use({
  install (Vue) {
    Vue.prototype.$axios = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
      withCredentials: true
    })
  }
})
Vue.use({
  install (Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: process.env.VUE_APP_API_URL+'/api',
      withCredentials: true
    })
  }
})

// VueCookies
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

// Mixins
// import user from './mixins/user'
// Vue.mixin(user)
// import generals from './mixins/generals'
// Vue.mixin(generals)
// import model_functions from './mixins/model_functions'
// Vue.mixin(model_functions)
// import images from './mixins/images'
// Vue.mixin(images)

import common_generals from './common-vue/mixins/generals'
Vue.mixin(common_generals)
import model_functions from './common-vue/mixins/model_functions'
Vue.mixin(model_functions)
import images from './common-vue/mixins/images'
Vue.mixin(images)
import permissions from './common-vue/mixins/permissions'
Vue.mixin(permissions)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
