import { Test, TestingModule } from '@nestjs/testing';
import { ComplimentsController } from './compliments.controller';
import { ComplimentsService } from './compliments.service';
import { Compliment } from './interfaces/compliment.interface';

describe('ComplimentsController', () => {
  let complimentsController: ComplimentsController;

  beforeEach(async () => {
    const controller = await Test.createTestingModule({
      controllers: [ComplimentsController],
      providers: [ComplimentsService],
    }).compile();

    complimentsController = controller.get<ComplimentsController>(
      ComplimentsController,
    );
  });

  describe('Compliments suite', () => {
    it('Should return a random compliment from the whole list', () => {
      expect(complimentsController.getRandomCompliment()).toBeDefined();
    });
    it('Should return the whole list of compliments', () => {
      expect(complimentsController.getAll()).toBeDefined();
    });
    it.todo('Should create a new compliment and add it to the whole list');
  });
});
