import { Test, TestingModule } from '@nestjs/testing';
import { CompteBanqueService } from './compte-banque.service';

describe('CompteBanqueService', () => {
  let service: CompteBanqueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompteBanqueService],
    }).compile();

    service = module.get<CompteBanqueService>(CompteBanqueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
