import { Document } from 'mongoose';

export interface Customer extends Document {
    readonly nomeEmpresa: string;
    readonly telefone: string;
    readonly status: string;
}

//"Dá forma aos dados" - determina o TIPO dos valores criados em "customer.schema.ts"