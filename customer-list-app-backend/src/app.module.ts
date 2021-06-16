import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyModule } from './company/company.module';
//import { CompanyService } from './company/company.service';
//import { CompanyController } from './company/company.controller';
import { EmployeeModule } from './employee/employee.module';
//import { EmployeeService } from './employee/employee.service';
//import { EmployeeController } from './employee/employee.controller';


@Module({
  imports: [ //aqui foi importado o MongooseMondule p/ configurar uma conexão com o MongoDB
    MongooseModule.forRoot('mongodb://localhost/crud-bughunt', { useNewUrlParser: true }),
    CompanyModule,
    EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



//Este é o módulo principal também é chamado de ROOTMODULE do BKEND - onde tudo começa.