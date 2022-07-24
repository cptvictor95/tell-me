import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { v4 } from 'uuid';
import { CreateComplimentDTO } from 'src/compliments/dto/CreateCompliment';
import { Compliment } from 'src/compliments/interfaces/compliment.interface';
import { ComplimentsService } from './compliments.service';
import { Response } from 'express';

@Controller('compliments')
export class ComplimentsController {
  constructor(private complimentsService: ComplimentsService) {}

  @Post('create')
  async create(
    @Body() createComplimentDto: CreateComplimentDTO,
    @Res() response: Response,
  ) {
    const uid = v4();
    const newComplement = {
      uid,
      content: createComplimentDto.content,
    };
    this.complimentsService.create(newComplement);

    return response
      .status(201)
      .send({ message: 'New compliment added to the list successfully!', uid });
  }

  @Get()
  getAll(): string {
    const compliments: Compliment[] = this.complimentsService.getAll();

    return `<h1>Full list of compliments</h1>\n<ul>${compliments.map(
      (compliment) =>
        `<li><p>${compliment.uid}</p><p>${compliment.content}</p></li>`,
    )}</ul>`;
  }

  @Get('random')
  getRandomCompliment(): string {
    const randomCompliment = this.complimentsService.getRandom();

    return randomCompliment.content;
  }
}
