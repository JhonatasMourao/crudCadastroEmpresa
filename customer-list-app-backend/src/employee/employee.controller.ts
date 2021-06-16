import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDTO } from './dto/create-employee.dto';

@Controller('employee')
export class EmployeeController {
    constructor(private employeeService: EmployeeService) { }

    // add a employee
    @Post('/create')
    async addEmployee(@Res() res, @Body() createEmployeeDTO: CreateEmployeeDTO) {
        const employee = await this.employeeService.addEmployee(createEmployeeDTO);
        return res.status(HttpStatus.OK).json({
            message: "Funcionário criado com sucesso!",
            employee
        })
    }

    // Update a employee's details
    @Put('/update')
    async updateEmplyee(@Res() res, @Query('employeeID') employeeID, @Body() createEmployeeDTO: CreateEmployeeDTO) {
        const employee = await this.employeeService.updateEmployee(employeeID, createEmployeeDTO);
        if (!employee) throw new NotFoundException('Funcionário não existe!');
        return res.status(HttpStatus.OK).json({
            message: 'Funcionário editado com sucesso!',
            employee
        });
    }

    // Delete a employee
    @Delete('/delete')
    async deleteEmployee(@Res() res, @Query('employeeID') employeeID) {
        const employee = await this.employeeService.deleteEmployee(employeeID);
        if (!employee) throw new NotFoundException('Funcionário não existe!');
        return res.status(HttpStatus.OK).json({
            message: 'Funcionário excluída',
            employee
        })
    }

    // Retrieve employee list
    @Get('employees')
    async getAllEmployee(@Res() res) {
        const employees = await this.employeeService.getAllEmployee();
        return res.status(HttpStatus.OK).json(employees);
    }

    // Fetch a particular employee using ID
    @Get('employee/:employeeID')
    async getEmployee(@Res() res, @Param('employeeID') employeeID) {
        const employee = await this.employeeService.getEmployee(employeeID);
        if (!employee) throw new NotFoundException('Funcionário não existe!');
        return res.status(HttpStatus.OK).json(employee);
    }
}