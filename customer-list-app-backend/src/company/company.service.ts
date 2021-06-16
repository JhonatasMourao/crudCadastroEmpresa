import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from './interfaces/company.interface';
import { CreateCompanyDTO } from './dto/create-company.dto';


@Injectable()
export class CompanyService {
    constructor(@InjectModel('Company') private readonly companyModel: Model<Company>) { }
    // fetch all companys
    async getAllCompany(): Promise<Company[]> {
        const companys = await this.companyModel.find().exec();
        return companys;
    }
    // Get a single company
    async getCompany(companyID): Promise<Company> {
        const company = await this.companyModel.findById(companyID).exec();
        return company;
    }
    // post a single company
    async addCompany(createCompanyDTO: CreateCompanyDTO): Promise<Company> {
        const newCompany = await new this.companyModel(createCompanyDTO);
        return newCompany.save();
    }
    // Edit company details
    async updateCompany(companyID, createCompanyDTO: CreateCompanyDTO): Promise<Company> {
        const updatedCompany = await this.companyModel
            .findByIdAndUpdate(companyID, createCompanyDTO, { new: true });
        return updatedCompany;
    }
    // Delete a company
    async deleteCompany(companyID): Promise<any> {
        const deletedCompany = await this.companyModel.findByIdAndRemove(companyID);
        return deletedCompany;
    }
}

//await espera função retornar um resultado e atribui na new company
//passa as ações para o BD (Isso é um Query)
//front -> controller -> service (cria a ação e insere no banco)
//contem a logica de interação com DB - criação, atualização, excluir 
