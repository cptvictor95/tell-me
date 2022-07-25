import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compliment } from './compliment.entity';

@Injectable()
export class ComplimentsService {
  constructor(
    @InjectRepository(Compliment)
    private complimentsRepository: Repository<Compliment>,
  ) {}

  create(compliment: Compliment) {
    const result = this.complimentsRepository.save(compliment);

    return result;
  }

  findAll(): Promise<Compliment[]> {
    return this.complimentsRepository.find();
  }

  findById(id: string): Promise<Compliment> {
    return this.complimentsRepository.findOneBy({ id });
  }
}
