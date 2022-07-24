import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComplimentsController } from './compliments/compliments.controller';
import { ComplimentsService } from './compliments/compliments.service';

@Module({
  imports: [],
  controllers: [AppController, ComplimentsController],
  providers: [AppService, ComplimentsService],
})
export class AppModule {}
