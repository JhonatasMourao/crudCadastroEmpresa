import * as mongoose from 'mongoose'; //importa tudo do monggose e tudo terá o apelido de 'mongoose'

export const CompanySchema = new mongoose.Schema({
    nomeEmpresa: String,
    telefone: String,
    status: String,
})

//Essa classe cria um esquema de BD Mongoose que determina os dados que serão armazenados no BD
//Objeto que fará interface entre a aplicação e o BD