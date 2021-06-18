<template>
  <div class="container-fluid">
    <div class="text-center">
      <h2>LISTAGEM DE FUNCIONÁRIOS DA EMPRESA</h2>

      <p>Teste BugHunt (CRUD contstruído com Vue.Js / Nest.Js / MongoDB)</p>
      <div v-if="employees.length === 0">
        <h2>Nenhuma empresa/funcionário cadastrada(o) foi encontrada!</h2>
      </div>
    </div>

    <div class="">
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Funcionário</th>
            <th scope="col">Telefone</th>
            <th scope="col">Data de Nascimento</th>
            <th scope="col">Salário</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees" :key="employee._id">
            <td>{{ employee.nomeFuncionario }}</td>
            <td>{{ employee.telefoneFuncionario }}</td>
            <td>{{ employee.dataDeNascimento }}</td>
            <td>{{ employee.salario }}</td>
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