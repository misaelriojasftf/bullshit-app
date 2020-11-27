import { Body, Controller, Get, Post } from '@nestjs/common';
import { RedService } from './red.service';
import { CreateRedDto } from './dto/create-nodered.dto';
import { Red } from './schemas/red.schema';

@Controller('red')
export class RedController {
  constructor(private readonly redService: RedService) { }

  @Post()
  async create(@Body() createRedDto: CreateRedDto) {
    await this.redService.create(createRedDto);
  }

  @Get()
  async findAll(): Promise<Red[]> {
    return this.redService.findAll();
  }
}
