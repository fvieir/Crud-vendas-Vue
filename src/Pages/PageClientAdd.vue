<template>
    <div class="pageClientAdd">
        <div class="card text-center">
            <div class="card-header">
                <span class="float-start">Cliente</span>
                <button class="btn btn-primary float-end">Cadastrar</button>
            </div>
            <div class="card-body">
                <form class="row g-3">
                    <div class="col-md-4">
                        <label for="name" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="name">
                    </div>
                    <div class="col-md-4">
                        <label for="type" class="form-label">Tipo</label>
                        <select id="type" class="form-select">
                        <option selected>Selecione</option>
                            <option value="PF">Pessoa Física</option>
                            <option value="PJ">Pessoa Jurídica</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <label for="cpf" class="form-label">CPF</label>
                        <input type="email" class="form-control" id="cpf">
                    </div>
                    <div class="col-md-4">
                        <label for="cnpj" class="form-label">CNPJ</label>
                        <input type="email" class="form-control" id="cnpj">
                    </div>
                    <div class="col-12">
                        <label for="address" class="form-label">Endereço</label>
                        <input type="text" class="form-control" id="address" placeholder="Rua, Antônio de melo, 150, Centro, Pará de Minas">
                    </div>
                    <div class="col-12 mb-3">
                        <button type="submit" class="btn btn-success float-start">Salvar</button>
                    </div>
                </form>

                <form class="row">
                    <div class="row">
                        <div class="col-md-6">
                            <label for="number" class="form-label">Número</label>
                            <input type="text" class="form-control" id="number">
                        </div>
                        <div class="col-md-6">
                            <label for="type" class="form-label">Tipo</label>
                            <input type="text" class="form-control" id="type">
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button class="btn btn-outline-dark me-md-2" type="button">Voltar</button>
                            <button class="btn btn-success" type="button">Salvar</button>
                        </div>
                    </div>
                </form>

                <table class="table table-borderless">
                    <thead class="table-light">
                        <tr>
                        <th scope="col" style="width:100px;">id</th>
                        <th scope="col" style="width:500px;">Cliente</th>
                        <th scope="col" style="width:220px;">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark, PF, Rua Antonio de melo</td>
                            <td class="flex">
                                <button class="btn btn-sm btn-warning">Editar</button>
                                <button class="btn btn-sm btn-danger">Excluir</button>
                                <button class="btn btn-sm btn-info">Add Tel</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageClienAdd'
}
</script>

<style>
    .flex {
        display: flex;
        justify-content: space-around;
    }
</style>