<template>
    <div class="pageClientAdd">
        <div class="card text-center">
            <div class="card-header">
                <span class="float-start">Cliente</span>
                <button v-if="!addTel" @click="setClient()" class="btn btn-primary float-end">Cadastrar</button>
            </div>
            <div class="card-body">
                <div v-if="loading" class="spinner-border text-primary" role="status">
                    <span class="sr-only"></span>
                </div>
                <div v-if="addClient" class="pageClientAdd__form-client">
                    <form v-on:submit.prevent="createClient()" class="row g-3">
                        <div class="col-md-4">
                            <label for="name" class="form-label">Nome</label>
                            <input type="text" v-model="clientAdd.name" class="form-control" id="name">
                        </div>
                        <div class="col-md-4">
                            <label for="type" class="form-label">Tipo</label>
                            <select id="type" class="form-select" @change="setClientType($event.target.value)">
                            <option selected>Selecione</option>
                                <option value="PF">Pessoa Física</option>
                                <option value="PJ">Pessoa Jurídica</option>
                            </select>
                        </div>
                        <div v-show="clientAdd.type === 'PF'" class="col-md-4">
                            <label for="cpf" class="form-label">CPF</label>
                            <input type="text" class="form-control" id="cpf" v-mask="'###.###.###-##'" v-model="clientAdd.cpf">
                        </div>
                        <div v-show="clientAdd.type === 'PJ'" class="col-md-4">
                            <label for="cnpj" class="form-label">CNPJ</label>
                            <input type="text" class="form-control" id="cnpj" v-mask="'##.###.###/###-##'" v-model="clientAdd.cnpj">
                        </div>
                        <div class="col-12">
                            <label for="address" class="form-label">Endereço</label>
                            <input type="text" class="form-control" id="address" placeholder="Rua, Antônio de melo, 150, Centro, Pará de Minas" v-model="clientAdd.address">
                        </div>
                        <div class="col-12 mb-3 gap-2 d-md-flex justify-content-md-end">
                            <button type="submit" class="btn btn-success">Salvar</button>
                            <button @click="addClient = false" class="btn btn-outline-dark me-md-2" type="button">Voltar</button>
                        </div>
                    </form>
                </div>

                <div v-if="addTel" class="pageClientAdd__form-add-tel">
                    <form class="row">
                        <div class="row">
                            <div class="col-md-auto">
                                <div class="card" style="width: 18rem;">
                                    <div class="card-header">
                                        {{currentClient[0].name}}
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item"> <strong>Tipo: </strong> {{currentClient[0].type}}</li>
                                        <li class="list-group-item">
                                            <span v-if="currentClient[0].type === 'PF'"> <strong>CPF: </strong> {{currentClient[0].cpf }}</span>
                                            <span v-else > <strong>CNPJ: </strong> {{currentClient[0].cnpj }}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-auto">
                                <label for="number" class="form-label">Número</label>
                                <input type="text" class="form-control" id="number" v-mask="'##-#####-####'" v-model="clientAdd.number">
                            </div>
                            <div class="col-md-auto">
                                <label for="type" class="form-label">Tipo</label>
                                <input type="text" class="form-control" id="type">
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button @click="addTel = false" class="btn btn-outline-dark me-md-2" type="button">Voltar</button>
                                <button class="btn btn-success" type="button">Salvar</button>
                            </div>
                        </div>
                    </form>
                </div>

                <table v-if="!addTel && !addClient" class="pageClientAdd__table table ">
                    <thead class="table-light">
                        <tr>
                        <th scope="col" style="width:100px;">id</th>
                        <th scope="col" style="width:500px;">Cliente</th>
                        <th scope="col" style="width:220px;">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(client, i) in clients" :key="i">
                            <th scope="row">{{client.id}}</th>
                            <td>
                                <strong>Cliente:</strong> {{client.name}}, 
                                <strong> Tipo:</strong> {{client.type}}
                                <span v-if="client.address">,<strong> Endereço: </strong> {{client.address}}</span>
                            </td>
                            <td class="flex">
                                <button class="btn btn-sm btn-warning">Editar</button>
                                <button class="btn btn-sm btn-danger">Excluir</button>
                                <button @click="addTelClient(client.id)" class="btn btn-sm btn-info">Add Tel</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'PageClienAdd',
    data () {
        return {
            addTel: false,
            addClient: false,
            currentClient: '',
            clientAdd: {
                name: '',
                type: '',
                cpf: '',
                cnpj: '',
                number: ''
            },
            loading: false
        }
    },
    computed: {
        ...mapGetters({
            clients: 'clients'
        }),
    },
    mounted () {
        this.loadClient()
    },
    methods: {
        createClient() {
            this.loading = true
            let postData = {}
            postData = {
                name: this.clientAdd.name,
                type: this.clientAdd.type,
                address: this.clientAdd.address
            }
            this.clientAdd.type === 'PF' ? postData.cpf = this.clientAdd.cpf : postData.cnpj = this.clientAdd.cnpj
            try {
                const response = this.postClient(postData)
                response.then(res => {
                    if (res.errors) {
                        this.errors = res.errors
                    }
                    this.loading = false
                    this.addClient = false
                })
            } catch (error) {
                this.$swal('Server Error!', error, 'error');
                this.loading = false
            }
        },
        setClient () {
            this.addClient = true
            this.clearFormClient()
        },
        clearFormClient () {
            this.clientAdd = {
                name: '',
                type: '',
                cpf: '',
                cnpj: ''
            }
        },
        setClientType (value) {
            this.clientAdd.type = value
        },
        addTelClient (id) {
            this.addTel = true
            this.currentClient = this.clients.filter(c => {
                return c.id === id
            })
        },
        loadClient() {
            try {
                this.getClient()
            } catch (error) {
                console.log(error)
            }
        },
        ...mapActions(['getClient', 'postClient'])
    }
}
</script>

<style>
    .flex {
        display: flex;
        justify-content: space-around;
    }
</style>