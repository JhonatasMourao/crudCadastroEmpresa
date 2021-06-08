<template>
  <div>
    <h4 class="text-center mt-20">
      <small>
        <button class="btn btn-secondary" v-on:click="navigate()">Todos Cadastros</button>
      </small>
    </h4>
    <div class="col-md-12 form-wrapper">
      <h2>EDITAR CADASTRO</h2>
      <form id="create-post-form" @submit.prevent="editCustomer">
        <div class="form-group col-md-12">
          <label for="title"> Nome da Empresa </label>
          <input
            type="text"
            id="nomeEmpresa"
            v-model="customer.nomeEmpresa"
            name="title"
            class="form-control"
            required
          />
        </div>
        <div class="form-group col-md-12">
          <label for="title"> Telefone </label>
          <input
            type="text"
            id="telefone"
            v-model="customer.telefone"
            name="title"
            class="form-control"
            required
          />
        </div>
        <div class="form-group col-md-12">
          <label for="title"> Status </label>
          <input
            type="text"
            id="status"
            v-model="customer.status"
            name="title"
            class="form-control"
            required
          />
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit" id="btnSalvar">SALVAR</button>
        </div>
      </form>
    </div>
  </div>

  <!-- formulario de edição de uma empresa -->
</template>

<style scoped>
h2 {
  margin-top: 60px;
  margin-left: 15px;
  color: blue;
  text-align: center;
}

#create-post-form{
  margin-top: 30px;
}

#btnSalvar {
  width: 150px;
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
      customer: {},
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getCustomer();
  },
  methods: {
    editCustomer() {
      //esse metodo envia uma solicitação PUT HTTP ao servidor
      let customerData = {
        nomeEmpresa: this.customer.nomeEmpresa,
        telefone: this.customer.telefone,
        status: this.customer.status,
      };
      axios
        .put(
          `${server.baseURL}/customer/update?customerID=${this.id}`,
          customerData
        )
        .then((data) => {
          router.push({ name: "home" });
        });
    },
    getCustomer() {
      axios
        .get(`${server.baseURL}/customer/customer/${this.id}`)
        .then((data) => (this.customer = data.data));
    },
    navigate() {
      router.go(-1);
    },
  },
};
</script>