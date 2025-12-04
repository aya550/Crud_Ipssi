import { Test, TestingModule } from '@nestjs/testing';
import { EtablishmentService } from './etablishment.service';

describe('EtablishmentService', () => {
  let service: EtablishmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EtablishmentService],
    }).compile();

    service = module.get<EtablishmentService>(EtablishmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
