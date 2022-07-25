import { Test, TestingModule } from '@nestjs/testing';
import { InsultsController } from './insults.controller';

describe('InsultsController', () => {
  let controller: InsultsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsultsController],
    }).compile();

    controller = module.get<InsultsController>(InsultsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
