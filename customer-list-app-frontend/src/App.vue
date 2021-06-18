<template>
  <div id="app">
    <div id="nav">
      <router-link to="/create" class="routerLink">Cadastrar Empresa</router-link> |
      <router-link to="/list" class="routerLink">Listar Empresas</router-link> |
      <router-link to="/createEmployee" class="routerLink">Cadastrar Funcionário</router-link> |
      <router-link to="/listEmployee" class="routerLink">Listar Funcionários</router-link> |

      <!-- links de navegação da pagina -->
    </div>
    <router-view/> <!-- renderiza o conteudo -->
  </div>
</template>

<style>
#nav {
  background: rgba(45, 156, 88, 0.151);
  text-align: center;
  padding: 5px;
}
.routerLink{
  color: rgba(33, 107, 61, 0.952);
  font-size: 18px;
  Display: inline-block;
  margin-top: 20px;
}
.form-wrapper {
  width: 500px;
  margin: auto;
}
</style>

<!-- Esta é a primeira pagina que é renderizada na aplicação -->