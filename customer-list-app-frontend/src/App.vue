<template>
  <div id="app">
    <div id="nav">
      <router-link to="/create" class="routerLink">Cadastrar</router-link> |
      <router-link to="/" class="routerLink">Listar</router-link> 
      <!-- links de navegação da pagina -->
    </div>
    <router-view/> <!-- renderiza o conteudo -->
  </div>
</template>

<style>
.routerLink{
  display: inline-block;
  margin-top: 20px;
}
.form-wrapper {
  width: 500px;
  margin: 0 auto;
}
</style>
