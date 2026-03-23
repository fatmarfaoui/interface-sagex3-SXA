import { Test, TestingModule } from '@nestjs/testing';
import { CompteBanqueController } from './compte-banque.controller';

describe('CompteBanqueController', () => {
  let controller: CompteBanqueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompteBanqueController],
    }).compile();

    controller = module.get<CompteBanqueController>(CompteBanqueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
