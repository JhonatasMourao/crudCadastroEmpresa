import { Document } from 'mongoose';

export interface Company extends Document {
    readonly nomeEmpresa: string;
    readonly telefone: string;
    readonly status: string;
}

//"Dá forma aos dados" - determina o TIPO dos valores criados em "company.schema.ts"
//readonly -> não permite mudança nos dados que serão enviados ao BD (filtro)
//Ou seja, o BD só vai receber os dados que aqui foram validados