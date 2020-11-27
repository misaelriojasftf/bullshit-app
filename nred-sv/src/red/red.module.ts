import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RedController } from './red.controller';
import { RedGateway } from './red.gateway';
import { RedService } from './red.service';
import { Red, noderedSchema } from './schemas/red.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Red.name, schema: noderedSchema }])],
  controllers: [RedController],
  providers: [
    RedService,
    RedGateway
  ],
})
export class RedModule { }
