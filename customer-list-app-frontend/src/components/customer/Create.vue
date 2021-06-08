<template>
  <div>
    <div class="col-md-12 form-wrapper">
      <h2>CADASTRO DE EMPRESAS</h2>
      <form id="create-post-form" @submit.prevent="createCustomer">
        <div class="form-group col-md-12">
          <label for="title"> Nome da Empresa </label>
          <input
            required
            type="text"
            id="nomeEmpresa"
            v-model="nomeEmpresa"
            name="title"
            class="form-control"
            placeholder="Digite o nome"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="title"> Telefone de Contato </label>
          <input
            required
            type="text"
            id="telefone"
            v-model="telefone"
            name="title"
            class="form-control"
            placeholder="(xx) - xxxxxxxx"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="title"> Status </label>
          <input
            required
            type="text"
            id="status"
            v-model="status"
            name="title"
            class="form-control"
            placeholder="ATIVO / INATIVO"
          />
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit" id="btnCadastrar">CADASTRAR</button>
        </div>
      </form>
    </div>
  </div>

  <!-- esse componente possui o formulario para criação de um novo cliente. -->
</template>

<style scoped>
  h2{
    margin: 20px;
    color: blue;
  }
  #btnCadastrar{
    width: 150px;
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
      status: "",
    };
  },
  methods: {
    createCustomer() {
      //recebe os detalhes de um cliente por meio dos campos de entrada
      let customerData = {
        nomeEmpresa: this.nomeEmpresa,
        telefone: this.telefone,
        status: this.status,
      };
      this.__submitToServer(customerData);
    },
    __submitToServer(data) {
      axios.post(`${server.baseURL}/customer/create`, data).then(() => {
        router.push({ name: "home" });
      });
    },
  },
};
</script>

