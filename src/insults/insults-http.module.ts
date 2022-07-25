import { Module } from '@nestjs/common';
import { InsultsController } from './insults.controller';
import { InsultsModule } from './insults.module';
import { InsultsService } from './insults.service';

@Module({
  imports: [InsultsModule],
  controllers: [InsultsController],
  providers: [InsultsService],
})
export class InsultsHttpModule {}
