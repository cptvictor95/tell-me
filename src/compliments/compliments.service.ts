import { Injectable } from '@nestjs/common';
import { Compliment } from 'src/compliments/interfaces/compliment.interface';
import * as fs from 'fs';

@Injectable()
export class ComplimentsService {
  private readonly compliments: Compliment[];

  constructor() {
    const complimentsFile = fs.readFileSync(
      './src/compliments/data/compliments.json',
      'utf-8',
    );
    const parsedCompliments = JSON.parse(complimentsFile);

    this.compliments = parsedCompliments;
  }

  create(compliment: Compliment) {
    this.compliments.push(compliment);

    // overwrites compliments data file with new data
    fs.writeFileSync(
      './src/compliments/data/compliments.json',
      JSON.stringify(this.compliments),
    );
  }

  getAll(): Compliment[] {
    return this.compliments;
  }

  getRandom(): Compliment {
    const randomIndex = Math.floor(Math.random() * this.compliments.length);
    const randomCompliment: Compliment = this.compliments[randomIndex];

    return randomCompliment;
  }
}
