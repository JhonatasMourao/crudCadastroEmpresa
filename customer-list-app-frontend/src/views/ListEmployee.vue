<template>
  <div class="container-fluid">
    <div class="text-center">
      <h1>LISTAGEM DE FUNCIONÁRIOS CADASTRADOS</h1>

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
                <div class="btn-group" style="margin-bottom: 20px">
                  <router-link
                    :to="{ name: 'EditEmployee', params: { id: employee._id } }"
                    class="btn btn-sm btn-outline-secondary"
                    >EDITAR
                  </router-link>
                  <!-- </router-link> O Router link cria um link para edição e visualização de um cliente/empresa passando o id com parâm. de consulta-->
                  <button
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
h1 {
  color: blue;
}
h2 {
  color: rgb(179, 56, 11);
}
p {
  color: darkgreen;
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