import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyModule } from './company/company.module';
import { EmployeeModule } from './employee/employee.module';


@Module({
  imports: [ //aqui foi importado o MongooseMondule p/ configurar uma conexão com o MongoDB
    MongooseModule.forRoot('mongodb://localhost/crud-bughunt', { useNewUrlParser: true }), //criado o banco de dados crud-bunghunt
    CompanyModule,
    EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



//Este é o módulo principal também é chamado de ROOTMODULE do BKEND - onde tudo começa.