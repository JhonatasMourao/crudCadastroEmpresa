<template>
  <div class="formulario">
    <h2 class="titulo">CADASTRAR FUNCIONÁRIO</h2>

    <b-form @submit.prevent="createEmployee" @reset="onReset">
      <b-form-group id="input-group-1" label="Nome do Funcionário:" class="label" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="nomeFuncionario"
          type="text"
          placeholder="Digite o nome do funcionário"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Telefone:" class="label" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="telefoneFuncionario"
          type="text"
          placeholder="Digite o telefone do funcionário"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Data de Nascimento:" class="label" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="dataDeNascimento"
          type="text"
          placeholder="00/00/0000"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Salário:" class="label" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="salario"
          placeholder="R$00.00"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="select" label="Empresa:" class="label" label-for="selectBox">
        <b-form-select 
          id="selectBox"
          class="selection"
          v-model="company" 
          :options="companies">
          </b-form-select>
        </b-form-group>

      <b-button type="submit" variant="primary" class="btn">Cadastrar</b-button>
      <b-button type="reset" variant="danger" class="btn">Apagar</b-button>
    </b-form>
  </div>
</template>

<style scoped>
.titulo {
  color: rgba(158, 28, 93);
  text-align: center;
  margin-bottom: 25px;
  font-weight: bold;
}
.formulario {
  margin: 35px 280px 30px 280px;
  padding: 20px;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(99, 18, 58, 0.527);
  background: rgba(99, 18, 58, 0.048);
}
.label {
  margin-bottom: 15px;
}
.selection {
  width: 220px;
  height: 35px;
  margin-bottom: 15px;
}
.btn {
  width: 100px;
  margin-right: 20px;
}
</style>

<script>
import axios from "axios"; //uso o axios para postar os dados no servidor
import { server } from "../../helper";
import router from "../../router";

export default {
  data() {
    return {
      nomeFuncionario: "",
      telefoneFuncionario: "",
      dataDeNascimento: "",
      salario: "",
      company: null,
      companies: [],
    };
  },
  async created() {
    this.companies = await this.getCompanies();
  },
  methods: {
    async getCompanies() {
     const options = [
      { value: null, text: 'Insira uma opção' },
    ];

    const data = await axios.get(`${server.baseURL}/company/companys`);
    const companys = data.data;
      for (const company of companys) { //percorre o array companys um por um atribuindo cada valor ao company
      options.push(
        { value: company._id, text: company.nomeEmpresa}
      );
     }
    return options; // recupera companys e devolve elas
  },
    createEmployee() {
      //recebe os detalhes de um funcionario por meio dos campos de entrada
      let employeeData = {
        nomeFuncionario: this.nomeFuncionario,
        telefoneFuncionario: this.telefoneFuncionario,
        dataDeNascimento: this.dataDeNascimento,
        salario: this.salario,
        idEmpresa: this.company,
      };
      this.__submitToServer(employeeData);
    },
    __submitToServer(data) {
      axios.post(`${server.baseURL}/employee/create`, data).then(() => {
        router.push({ name: "ListEmployee" });
      });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.nomeFuncionario = "";
      this.telefoneFuncionario = "";
      this.dataDeNascimento = "";
      this.salario = "";
    },
  },
};
</script>

