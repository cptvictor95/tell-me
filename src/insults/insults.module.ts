import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InsultsController } from './insults.controller';
import { Insult } from './insults.entity';
import { InsultsService } from './insults.service';

@Module({
  imports: [TypeOrmModule.forFeature([Insult])],
  controllers: [InsultsController],
  providers: [InsultsService],
})
export class InsultsModule {}
