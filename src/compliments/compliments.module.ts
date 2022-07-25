import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compliment } from './compliment.entity';
import { ComplimentsController } from './compliments.controller';
import { ComplimentsService } from './compliments.service';

@Module({
  imports: [TypeOrmModule.forFeature([Compliment])],
  controllers: [ComplimentsController],
  providers: [ComplimentsService],
})
export class ComplimentsModule {}
