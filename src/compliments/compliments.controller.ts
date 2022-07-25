import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { CreateComplimentDTO } from 'src/compliments/dto/createCompliment.dto';
import { ComplimentsService } from './compliments.service';
import { Response } from 'express';
import { Compliment } from './compliment.entity';

@Controller('compliments')
export class ComplimentsController {
  constructor(private complimentsService: ComplimentsService) {}

  @Post('create')
  async create(
    @Body() createComplimentDto: CreateComplimentDTO,
    @Res() response: Response,
  ) {
    this.complimentsService.create(createComplimentDto);

    return response
      .status(201)
      .send({ message: 'Compliment added to the list successfully!' });
  }

  @Get()
  getAll(): Promise<Compliment[]> {
    const compliments = this.complimentsService.findAll();

    return compliments;
  }

  @Get(':id')
  getComplimentById(@Param('id') id: string) {
    const compliment = this.complimentsService.findById(id);

    return compliment;
  }
}
