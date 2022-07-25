import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateInsultDTO } from './dto/createInsult.dto';
import { Insult } from './insults.entity';
import { InsultsService } from './insults.service';

@Controller('insults')
export class InsultsController {
  constructor(private insultsService: InsultsService) {}

  @Post('create')
  create(@Body() createInsultDto: CreateInsultDTO, @Res() response: Response) {
    this.insultsService.create(createInsultDto);

    return response
      .status(201)
      .send({ message: 'Insult added to the list successfully!' });
  }

  @Get()
  getInsults(): Promise<Insult[]> {
    return this.insultsService.findAll();
  }

  @Get(':id')
  getInsultById(@Param('id') id: string): Promise<Insult> {
    return this.insultsService.findById(id);
  }
}
