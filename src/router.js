import Vue from "vue";
import Router from "vue-router";
import PageBegin from './Pages/PageBegin.vue'
import PageQuery from './Pages/PageQuery.vue'
import PageSales from './Pages/PageSales.vue'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {path: '/', component: PageBegin},
        {path: '/sales', component: PageSales},
        {path: '/queries', component: PageQuery}
    ]
})