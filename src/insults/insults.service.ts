import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInsultDTO } from './dto/createInsult.dto';
import { Insult } from './insults.entity';

@Injectable()
export class InsultsService {
  constructor(
    @InjectRepository(Insult)
    private insultsRepository: Repository<Insult>,
  ) {}

  create(insult: Insult): Promise<CreateInsultDTO & Insult> {
    const result = this.insultsRepository.save(insult);

    return result;
  }

  findAll(): Promise<Insult[]> {
    return this.insultsRepository.find();
  }

  findById(id: string): Promise<Insult> {
    return this.insultsRepository.findOneBy({ id });
  }
}
