import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './customer/customer.module';
@Module({
  imports: [ //aqui foi importado o MongooseMondule p/ configurar uma conexão com o MongoDB
    MongooseModule.forRoot('mongodb://localhost/customer-app', { useNewUrlParser: true }),
    CustomerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//Este é o módulo principal também é chamado de ROOTMODULE do BKEND - onde tudo começa.