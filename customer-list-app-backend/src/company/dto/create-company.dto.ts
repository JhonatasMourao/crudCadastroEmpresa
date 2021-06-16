export class CreateCompanyDTO {
    readonly nomeEmpresa: string;
    readonly telefone: string;
    readonly status: string;
}

//Aqui é criado um objeto que definirá como os dados serão enviados pela rede
//DTO - Data Transfer Object
//readonly - somente leituras imutável