<template>
  <div class="container-fluid">
    <div class="text-center">
      <h2>LISTAGEM DE EMPRESAS CADASTRADAS</h2>
      <p>Teste BugHunt (CRUD contstruído com Vue.Js / Nest.Js / MongoDB)</p>
      <div v-if="companys.length === 0">
        <h2>Nenhuma empresa cadastrada foi encontrada!</h2>
      </div>
    </div>

    <div class="tabela">
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Nome da Empresa</th>
            <th scope="col">Telefone</th>
            <th scope="col">Status</th>
            <th scope="col" style="text-align: center">Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="company in companys" :key="company._id">
            <td>{{ company.nomeEmpresa }}</td>
            <td>{{ company.telefone }}</td>
            <td>{{ company.status }}</td>
            <td id="colunaStatus">
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" style="margin-bottom: 20px">
                  <router-link
                    :to="{ name: 'EditCompany', params: { id: company._id } }"
                    class="btn btn-sm btn-outline-secondary" id="btnEditar"
                  >
                    EDITAR
                  </router-link>
                  <!-- </router-link> O Router link cria um link para edição e visualização de um cliente/empresa passando o id com parâm. de consulta-->
                  <button
                    id="btnExcluir"
                    class="btn btn-sm btn-outline-secondary"
                    v-on:click="deleteCompany(company._id)"
                  >
                    EXCLUIR
                  </button>
                  <router-link
                    :to="{
                      name: 'ListEmployeeByCompany',
                      params: { id: company._id },
                    }"
                    class="btn btn-sm btn-outline-secondary"
                    id="btnFuncionarios"
                    >FUNCIONÁRIOS
                  </router-link>
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
h2 {
  text-align: center;
  color: rgb(29, 131, 105);
  margin-top: 35px;
  margin-bottom: 25px;
  font-weight: bold;
}
p {
  color: darkgreen;
}
.thead-dark{
  background: rgba(29, 131, 106, 0.055);
}
#colunaStatus{
  text-align: center;
  width: 20px;
}
#btnEditar, #btnExcluir {
  margin-right: 5px;
  width: 115px;
}
</style>

<script>
import { server } from "../helper";
import axios from "axios";
export default {
  data() {
    return {
      companys: [],
    };
  },
  created() {
    this.fetchCompanys();
  },
  methods: {
    fetchCompanys() {
      //o metodo fetch busca todos empresas do DB e atualiza a pag. com os dados retornados do servidor
      axios
        .get(`${server.baseURL}/company/companys`)
        .then((data) => (this.companys = data.data));
    },

    deleteCompany(id) {
      axios
        .delete(`${server.baseURL}/company/delete?companyID=${id}`)
        .then((data) => {
          console.log(data);
          window.location.reload();
        });
    },
  },
};
</script>