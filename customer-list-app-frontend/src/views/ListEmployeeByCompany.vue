<template>
  <div class="container-fluid">
    <div class="text-center">
      <h1>LISTAGEM DE FUNCIONÁRIOS DA EMPRESA</h1>

      <p>Teste BugHunt (CRUD contstruído com Vue.Js / Nest.Js / MongoDB)</p>
      <div v-if="employees.length === 0">
        <h2>Nenhuma empresa/funcionário cadastrada(o) foi encontrada!</h2>
      </div>
    </div>

    <div class="">
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Nome da Empresa</th>
            <th scope="col">Funcionários</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees" :key="employee._id">
            <td>{{ employee.nomeFuncionario }}</td>
            <td>{{ employee.telefoneFuncionario }}</td>
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
    this.companyId = this.$route.params.id;
    this.fetchEmployees();
  },
  methods: {
    fetchEmployees() {
      //o metodo fetch busca todos funcionarios do DB e atualiza a pag. com os dados retornados do servidor
      axios
        .get(`${server.baseURL}/employee/employees/${this.companyId}`)
        .then((data) => (this.employees = data.data));
    }
  },
};
</script>