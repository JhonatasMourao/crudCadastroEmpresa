
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './interfaces/employee.interface';
import { CreateEmployeeDTO } from './dto/create-employee.dto';


@Injectable()
export class EmployeeService {
    constructor(@InjectModel('Employee') private readonly employeeModel: Model<Employee>) { }
    // fetch all employees
    async getAllEmployee(): Promise<Employee[]> {
        const employees = await this.employeeModel.find().exec();
        return employees;
    }
    // fetch all employees by company
    async getAllEmployeeByCompany(companyID): Promise<Employee[]> {
        const employees = await this.employeeModel.find({ idEmpresa: companyID }).exec();
        return employees;
    }
    // Get a single employee
    async getEmployee(employeeID): Promise<Employee> {
        const employee = await this.employeeModel.findById(employeeID).exec();
        return employee;
    }
    // post a single employee
    async addEmployee(createEmployeeDTO: CreateEmployeeDTO): Promise<Employee> {
        const newEmployee = await new this.employeeModel(createEmployeeDTO);
        return newEmployee.save();
    }
    // Edit employee details
    async updateEmployee(employeeID, createEmployeeDTO: CreateEmployeeDTO): Promise<Employee> {
        const updatedEmployee = await this.employeeModel
            .findByIdAndUpdate(employeeID, createEmployeeDTO, { new: true });
        return updatedEmployee;
    }
    // Delete a employee
    async deleteEmployee(employeeID): Promise<any> {
        const deletedEmployee = await this.employeeModel.findByIdAndRemove(employeeID);
        return deletedEmployee;
    }
}

//await espera função retornar um resultado e atribui na new employee
//passa as ações para o BD (Isso é um Query)
//front -> controller -> service (cria a ação e insere no banco)
//contem a logica de interação com DB - criação, atualização, excluir 
