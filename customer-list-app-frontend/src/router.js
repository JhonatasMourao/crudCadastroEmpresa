import Vue from 'vue'
import Router from 'vue-router'
import ListCompanyComponent from '@/views/ListCompany';
import EditCompanyComponent from '@/components/company/EditCompany';
import CreateCompanyComponent from '@/components/company/CreateCompany';
import ListEmployeeComponent from '@/views/ListEmployee';
import EditEmployeeComponent from '@/components/employee/EditEmployee';
import CreateEmployeeComponent from '@/components/employee/CreateEmployee';
import ListCoEmComponent from '@/views/ListCoEm';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/list', name: 'ListCompany', component: ListCompanyComponent },
    { path: '/create', name: 'CreateCompany', component: CreateCompanyComponent },
    { path: '/edit/:id', name: 'EditCompany', component: EditCompanyComponent },
    { path: '/listEmployee', name: 'ListEmployee', component: ListEmployeeComponent },
    { path: '/createEmployee', name: 'CreateEmployee', component: CreateEmployeeComponent },
    { path: '/editEmployee/:id', name: 'EditEmployee', component: EditEmployeeComponent },
    { path: '/listCoEm/:id', name: 'ListCoEm', component: ListCoEmComponent },
    
  ]
});

//rotas faz redirecionamento para endreço url