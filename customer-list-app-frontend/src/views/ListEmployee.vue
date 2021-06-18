<template>
  <div class="container-fluid">
    <div class="text-center">
      <h2>LISTAGEM DE FUNCIONÁRIOS CADASTRADOS</h2>

      <p>Teste BugHunt (CRUD contstruído com Vue.Js / Nest.Js / MongoDB)</p>
      <div v-if="employees.length === 0">
        <h2>Nenhum funcionário encontrado!</h2>
      </div>
    </div>

    <div class="">
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Nome do Funcionário</th>
            <th scope="col">Telefone</th>
            <th scope="col">Data de Nascimento</th>
            <th scope="col">Salário (R$)</th>
            <th scope="col">Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees" :key="employee._id">
            <td>{{ employee.nomeFuncionario }}</td>
            <td>{{ employee.telefoneFuncionario }}</td>
            <td>{{ employee.dataDeNascimento }}</td>
            <td>{{ employee.salario }}</td>
            <td>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <router-link
                    :to="{ name: 'EditEmployee', params: { id: employee._id } }"
                    class="btn btn-sm btn-outline-secondary"
                    id="btnEditar"
                    >EDITAR
                  </router-link>
                  <!-- </router-link> O Router link cria um link para edição e visualização de um cliente/empresa passando o id com parâm. de consulta-->
                  <button
                    id="btnEditar"
                    class="btn btn-sm btn-outline-secondary"
                    v-on:click="deleteEmployee(employee._id)"
                  >
                    EXCLUIR
                  </button>
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
      employees: [],
    };
  },
  created() {
    this.fetchEmployees();
  },
  methods: {
    fetchEmployees() {
      //o metodo fetch busca todos funcionarios do DB e atualiza a pag. com os dados retornados do servidor
      axios
        .get(`${server.baseURL}/employee/employees`)
        .then((data) => (this.employees = data.data));
    },
    deleteEmployee(id) {
      axios
        .delete(`${server.baseURL}/employee/delete?employeeID=${id}`)
        .then((data) => {
          console.log(data);
          window.location.reload();
        });
    },
  },
};
</script>