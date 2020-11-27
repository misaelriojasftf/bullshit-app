import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRedDto } from './dto/create-nodered.dto';
import { Red, redDocument } from './schemas/red.schema';

@Injectable()
export class RedService {
  constructor(
    @InjectModel(Red.name) private readonly redModel: Model<redDocument>,
  ) { }

  create = async (createCatDto: CreateRedDto): Promise<Red> =>
    new this.redModel(createCatDto).save();

  findAll = async (): Promise<Red[]> =>
    this.redModel.find().exec();

}
