import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
    nomeEmpresa: String,
    telefone: String,
    status: String,
})

//Essa classe cria um esquema de BD Mongoose que determina os dados que serão armazenados no BD
