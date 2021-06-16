import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDTO } from './dto/create-company.dto';

@Controller('company')
export class CompanyController {
    constructor(private companyService: CompanyService) { }

    // add a company
    @Post('/create')
    async addCompany(@Res() res, @Body() createCompanyDTO: CreateCompanyDTO) {
        const company = await this.companyService.addCompany(createCompanyDTO);
        return res.status(HttpStatus.OK).json({
            message: "Empresa cadastrada com sucesso!",
            company
        })
    }

    // Update a company's details
    @Put('/update')
    async updateCompany(@Res() res, @Query('companyID') companyID, @Body() createCompanyDTO: CreateCompanyDTO) {
        const company = await this.companyService.updateCompany(companyID, createCompanyDTO);
        if (!company) throw new NotFoundException('Empresa não existe!');
        return res.status(HttpStatus.OK).json({
            message: 'Empresa eeditada com sucesso!',
            company
        });
    }

    // Delete a company
    @Delete('/delete')
    async deleteCompany(@Res() res, @Query('companyID') companyID) {
        const company = await this.companyService.deleteCompany(companyID);
        if (!company) throw new NotFoundException('Empresa não existe!');
        return res.status(HttpStatus.OK).json({
            message: 'Empresa excluída',
            company
        })
    }

    // Retrieve companys list
    @Get('companys')
    async getAllCompany(@Res() res) {
        const companys = await this.companyService.getAllCompany();
        return res.status(HttpStatus.OK).json(companys);
    }

    // Fetch a particular company using ID
    @Get('company/:companyID')
    async getCompany(@Res() res, @Param('companyID') companyID) {
        const company = await this.companyService.getCompany(companyID);
        if (!company) throw new NotFoundException('Empresa não existe!');
        return res.status(HttpStatus.OK).json(company);
    }
}

//PUT: atualiza
//GET: recupera / carrega informação
//POST: criar / add informação

//async: função assincrona (sem fila de execução)
//sync: com fila de execução

//Enviar solicitações ao 'company.service.ts'
//manipula cada rota dentro do aplicativo