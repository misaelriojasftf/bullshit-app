import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RedModule } from './red/red.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://profile:ajinomoto123@cluster0.wc5uk.mongodb.net/nodered_db?retryWrites=true&w=majority'),
    RedModule,
  ],
})
export class AppModule { }
