import * as mongoose from 'mongoose'; //importa tudo do monggose e tudo terá o apelido de 'mongoose'

export const EmployeeSchema = new mongoose.Schema({
    nomeFuncionario: String,
    telefoneFuncionario: String,
    dataDeNascimento: String,
    salario: Number, 
    idEmpresa: String,
})

//Essa classe cria um esquema de BD Mongoose que determina os dados que serão armazenados no BD
//Objeto que fará interface entre a aplicação e o BD