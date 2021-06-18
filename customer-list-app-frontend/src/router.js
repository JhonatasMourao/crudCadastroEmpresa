import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/Home';
import ListCompanyComponent from '@/views/ListCompany';
import EditCompanyComponent from '@/components/company/EditCompany';
import CreateCompanyComponent from '@/components/company/CreateCompany';
import ListEmployeeComponent from '@/views/ListEmployee';
import EditEmployeeComponent from '@/components/employee/EditEmployee';
import CreateEmployeeComponent from '@/components/employee/CreateEmployee';
import ListEmployeeByCompanyComponent from '@/views/ListEmployeeByCompany';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/',  name: 'Home', component: HomeComponent },
    { path: '/list', name: 'ListCompany', component: ListCompanyComponent },
    { path: '/create', name: 'CreateCompany', component: CreateCompanyComponent },
    { path: '/edit/:id', name: 'EditCompany', component: EditCompanyComponent },
    { path: '/listEmployee', name: 'ListEmployee', component: ListEmployeeComponent },
    { path: '/createEmployee', name: 'CreateEmployee', component: CreateEmployeeComponent },
    { path: '/editEmployee/:id', name: 'EditEmployee', component: EditEmployeeComponent },
    { path: '/listEmployeeByCompany/:id', name: 'ListEmployeeByCompany', component: ListEmployeeByCompanyComponent },
    
  ]
});

//rotas faz redirecionamento para endreço url