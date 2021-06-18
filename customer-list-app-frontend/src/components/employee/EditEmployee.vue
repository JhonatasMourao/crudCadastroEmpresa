<template>
  <div class="formulario">
    <div class="col-md-12 form-wrapper">
      <h2 class="titulo">EDITAR CADASTRO DE FUNCIONÁRIO</h2>

      <form id="create-post-form" @submit.prevent="editEmployee">
        <b-form-group id="input-group-1" label="Nome do Funcionário:" class="label" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="employee.nomeFuncionario"
            type="text"
            placeholder="Digite o nome do funcionário"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Telefone:" class="label" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="employee.telefoneFuncionario"
            type="text"
            placeholder="Digte o telefone do funcionário"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Data de Nascimento:" class="label" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="employee.dataDeNascimento"
          type="text"
          placeholder="00/00/0000"
          required
        ></b-form-input>
      </b-form-group>

        <b-form-group id="input-group-4" label="Salário (R$):" class="label" label-for="input-2">
          <b-form-input
            id="input-2"
            type="number"
            v-model="employee.salario"
            placeholder="R$00.00"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="select" label="Empresa:" class="label" label-for="selectBox">
          <b-form-select id="selectBox" 
          class="selection"
          v-model="employee.idEmpresa" 
          :options="companies">
          </b-form-select>
          <div class="mt-3">
            <strong>{{ company }} </strong>
          </div>
        </b-form-group>

        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit" id="btnSalvar">SALVAR</button>
        </div>
      </form>
    </div>
  </div>

  <!-- formulario de edição de uma empresa -->
</template>

<style scoped>
.titulo {
  text-align: center;
  color: rgb(29, 131, 105);
  margin-bottom: 25px;
  font-weight: bold;
}
.formulario {
  margin: 35px 280px 30px 280px;
  padding: 20px;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(22, 20, 21, 0.5);
  background: rgba(22, 20, 21, 0.048);
}
.label {
  margin-bottom: 15px;
}
.selection {
  width: 220px;
  height: 35px;
  margin-bottom: 15px;
}
#btnSalvar {
  width: 220px;
  margin-right: 20px;
}
</style>

<script>
import { server } from "../../helper";
import axios from "axios";
import router from "../../router";

export default {
  data() {
    return {
      id: 0,
      employee: {},
      company: null,
      companies: [],
    };
  },
  async created() {
    this.id = this.$route.params.id;
    this.companies = await this.getCompanies();
    this.getEmployee();
  },


  methods: {
    async getCompanies() {
      const options = [
        { value: null, text: 'Insira uma opção' },
      ];

      const data = await axios.get(`${server.baseURL}/company/companys`);
      const companys = data.data;
        //.then(data => (this.company = data.data)); //quando carregar, p axios vai chamar a função then, passando o parametro data
        for (const company of companys) { //percorre o array companys um por um atribuindo cada valor ao company
        options.push(
          { value: company._id, text: company.nomeEmpresa}
        );
      }
      return options; // recupera companys e devolve elas
    }, 
    editEmployee() {
      //esse metodo envia uma solicitação PUT HTTP ao servidor
    let employeeData = {
      nomeFuncionario: this.employee.nomeFuncionario,
      telefoneFuncionario: this.employee.telefoneFuncionario,
      dataDeNascimento: this.employee.dataDeNascimento,
      salario: this.employee.salario,
      idEmpresa: this.employee.idEmpresa,
    };
    axios
      .put(
        `${server.baseURL}/employee/update?employeeID=${this.id}`,
        employeeData
      )
      .then((data) => {
        router.push({ name: "ListEmployee" });
      });
  },
    
    getEmployee() {
      axios
        .get(`${server.baseURL}/employee/employee/${this.id}`)
        .then((data) => (this.employee = data.data)); //aqui
    },
    
    navigate() {
      router.go(-1);
    },
  },
};
</script>