import Vue from 'vue'
import App from './App.vue'
import router from './router'
import bootstrap from './bootstrap'
import store from './store/store'

Vue.config.productionTip = false
Vue.use(bootstrap)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
