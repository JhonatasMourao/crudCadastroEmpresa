import { Decimal128 } from "mongoose";

export class CreateEmployeeDTO {
    readonly nomeFuncionario: string;
    readonly telefoneFuncionario: string;
    readonly dataDeNascimento: String;
    readonly salario: Number;
}

//Aqui é criado um objeto que definirá como os dados serão enviados pela rede
//DTO - Data Transfer Object
//readonly - somente leituras imutável