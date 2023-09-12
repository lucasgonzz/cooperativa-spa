import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/store/auth'
import partner from '@/store/partner'
import service from '@/store/service'
import partner_payment from '@/store/partner_payment'
import provider from '@/store/provider'
import provider_payment from '@/store/provider_payment'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        auth,
        partner,
        service,
        partner_payment,
        provider,
        provider_payment,
    }
})
