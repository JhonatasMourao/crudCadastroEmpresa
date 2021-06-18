<template>
  <div class="formulario">
    <h2 class="titulo">CADASTRAR EMPRESAS</h2>
    <b-form @submit.prevent="createCompany" @reset="onReset">
      <b-form-group id="input-group-1" label="Nome da Empresa:" class="label" label-for="input-1"
        ><b-form-input
          id="input-1"
          v-model="nomeEmpresa"
          type="text"
          class="txtBox"
          placeholder="Digite o nome da empresa"
          required>
          </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Telefone:" class="label" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="telefone"
          type="text"
          class="txtBox"
          placeholder="Digite o telefone"
          required>
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Status:" class="label" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="status"
          :options="situacoes"
          class="selection"
          required>
        </b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary" class="btn">Cadastrar</b-button>
      <b-button type="reset" variant="danger" class="btn">Apagar</b-button>
    </b-form>
  </div>
</template>

<style scoped>
.titulo {
  text-align: center;
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
      nomeEmpresa: "",
      telefone: "",
      status: null,
      checked: [],
      situacoes: [
        { text: "Selecione uma opção", value: null },
        "ATIVO",
        "INATIVO",
      ],
      show: true,
    };
  },
  methods: {
    createCompany() {
      //recebe os detalhes de um cliente por meio dos campos de entrada
      let companyData = {
        nomeEmpresa: this.nomeEmpresa,
        telefone: this.telefone,
        status: this.status,
      };
      this.__submitToServer(companyData);
    },
    __submitToServer(data) {
      axios.post(`${server.baseURL}/company/create`, data).then(() => {
        router.push({ name: "ListCompany" });
      });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.nomeEmpresa = "";
      this.telefone = "";
      this.status = null;
    },
  },
};
</script>

