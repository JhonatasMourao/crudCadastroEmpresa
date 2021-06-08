<template>
  <div class="container-fluid">
    <div class="text-center">
      <h1>LISTAGEM DE EMPRESAS CADASTRADAS</h1>
      <p>Teste BugHunt (CRUD contstruído com Vue.Js / Nest.Js / MongoDB)</p>
      <div v-if="customers.length === 0">
        <h2>Nenhuma empresa cadastrada foi encontrada!</h2>
      </div>
    </div>

    <div class="">
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Nome da Empresa</th>
            <th scope="col">Telefone</th>
            <th scope="col">Status</th>
            <th scope="col">Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in customers" :key="customer._id">
            <td>{{ customer.nomeEmpresa }}</td>
            <td>{{ customer.telefone }}</td>
            <td>{{ customer.status }}</td>
            <td>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" style="margin-bottom: 20px">
                  <router-link :to="{name: 'Edit', params: {id: customer._id}}" class="btn btn-sm btn-outline-secondary">EDITAR </router-link>
                  <!-- </router-link> O Router link cria um link para edição e visualização de um cliente/empresa passando o id com parâm. de consulta-->
                  <button class="btn btn-sm btn-outline-secondary" v-on:click="deleteCustomer(customer._id)" > EXCLUIR </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Aqui foi criado uma tabela HTML para exibir todos os detalhes das empresas (clientes) -->

</template>

<style scoped>
  h1{
    color: blue;
  }
  h2{
    color: rgb(179, 56, 11);
  }
  p{
    color: darkgreen;
  }
</style>

<script>
import { server } from "../helper";
import axios from "axios";
export default {
  data() {
    return {
      customers: [],
    };
  },
  created() {
    this.fetchCustomers();
  },
  methods: {
    fetchCustomers() { //o metodo fetch busca todos clientes/empresas do DB e atualiza a pag. com os dados retornados do servidor
      axios
        .get(`${server.baseURL}/customer/customers`)
        .then((data) => (this.customers = data.data));
    },
    deleteCustomer(id) {
      axios
        .delete(`${server.baseURL}/customer/delete?customerID=${id}`)
        .then((data) => {
          console.log(data);
          window.location.reload();
        });
    },
  },
};
</script>