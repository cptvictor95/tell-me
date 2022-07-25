import { Module } from '@nestjs/common';
import { ComplimentsController } from './compliments.controller';
import { ComplimentsModule } from './compliments.module';
import { ComplimentsService } from './compliments.service';

@Module({
  imports: [ComplimentsModule],
  providers: [ComplimentsService],
  controllers: [ComplimentsController],
})
export class ComplimentsHttpModule {}
