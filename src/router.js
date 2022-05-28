import Vue from "vue";
import Router from "vue-router";
import PageBegin from './Pages/PageBegin.vue'
import PageQuery from './Pages/PageQuery.vue'
import PageSales from './Pages/PageSales.vue'
import PageClientAdd from './Pages/PageClientAdd.vue'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {path: '/', component: PageBegin, name: 'home'},
        {path: '/sales', component: PageSales, name: 'sales'},
        {path: '/register', component: PageClientAdd, name: 'register'},
        {path: '/queries', component: PageQuery, name: 'queries'}
    ]
})