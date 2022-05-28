import Vue from "vue";
import Vuex from 'vuex'

// Modules da Store
import client from './modules/client'
import product from './modules/product'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: { client, product }
})