import Vue from "vue"

export default {
    state: {
        client: []
    },
    mutations: {
        setClient (state, client) {
            state.client = client
        }
    },
    actions: {
        getClient ({ commit }) {
            Vue.prototype.$http.get('/client')
                .then(response => {
                    const data = response.data
                    if (data) {
                        commit('setClient', data)
                    } 
                })
                .catch(error => {
                    return error
                }) 
        },
        postClient (context, params = {}) {
            console.log(context, params)
            Vue.prototype.$http.post('/client', params)
                .then(response => {
                    console.log(response)
                })
        }
    },
    getters: {
        clients (state) {
            return state.client
        }
    }
}