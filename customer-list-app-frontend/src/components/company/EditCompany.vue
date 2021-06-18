<template>
  <div class="formulario">
    <div class="col-md-12 form-wrapper">
      <h2 class="titulo">EDITAR CADASTRO DA EMPRESA</h2>

      <form id="create-post-form" @submit.prevent="editCompany">
        <div class="form-group col-md-12">
          <b-form-group
            id="input-group-1"
            label="Nome da Empresa:"
            label-for="input-1"
            class="label">
            <b-form-input
              id="input-1"
              v-model="company.nomeEmpresa"
              type="text"
              placeholder="Digite o nome da empresa"
              required>
            </b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Telefone:"
            label-for="input-2"
            class="label" >
            <b-form-input
              id="input-2"
              v-model="company.telefone"
              type="text"
              placeholder="Digte o telefone"
              required>
              </b-form-input>
          </b-form-group>
          
          <b-form-group id="input-group-3" label="Food:" class="label" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="company.status"
            :options="situacoes"
            class="selection"
            required>
            </b-form-select>
          </b-form-group>
          
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
      company: {},
      status: null,
          checked: [],
          situacoes: [{ text: 'Selecione uma opção', value: null }, 'ATIVO', 'INATIVO'],
          show: true
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getCompany();
  },
  methods: {
    editCompany() {
      //esse metodo envia uma solicitação PUT HTTP ao servidor
      let companyData = {
        nomeEmpresa: this.company.nomeEmpresa,
        telefone: this.company.telefone,
        status: this.company.status,
      };
      axios
        .put(
          `${server.baseURL}/company/update?companyID=${this.id}`,
          companyData
        )
        .then((data) => {
          router.push({ name: "ListCompany" });
        });
    },
    getCompany() {
      axios
        .get(`${server.baseURL}/company/company/${this.id}`)
        .then((data) => (this.company = data.data));
    },
    navigate() {
      router.go(-1);
    },
  },
};
</script>