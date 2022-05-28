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
        getClient ({ commit }, client) {
            commit('setClient', client)
        },
        postClient () {}
    },
    getters: {
        client (state) {
            return state.client
        }
    }
}