import { Test, TestingModule } from '@nestjs/testing';
import { DenominationController } from './denomination.controller';
import { DenominationService } from './denomination.service';

describe('DenominationController', () => {
  let controller: DenominationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DenominationController],
      providers: [DenominationService],
    }).compile();

    controller = module.get<DenominationController>(DenominationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
