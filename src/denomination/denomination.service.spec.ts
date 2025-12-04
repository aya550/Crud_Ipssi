import { Test, TestingModule } from '@nestjs/testing';
import { DenominationService } from './denomination.service';

describe('DenominationService', () => {
  let service: DenominationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DenominationService],
    }).compile();

    service = module.get<DenominationService>(DenominationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
