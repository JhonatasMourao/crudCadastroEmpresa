export interface Employee extends Document {
    readonly nomeFuncionario: string;
    readonly telefoneFuncionario: string;
    readonly dataDeNascimento: String;
    readonly salario: Number,
}

//"Dá forma aos dados" - determina o TIPO dos valores criados em "employee.schema.ts"
//readonly -> não permite mudança nos dados que serão enviados ao BD (filtro)
//Ou seja, o BD só vai receber os dados que aqui foram validados