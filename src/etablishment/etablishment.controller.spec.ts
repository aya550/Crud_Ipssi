import { Test, TestingModule } from '@nestjs/testing';
import { EtablishmentController } from './etablishment.controller';
import { EtablishmentService } from './etablishment.service';

describe('EtablishmentController', () => {
  let controller: EtablishmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EtablishmentController],
      providers: [EtablishmentService],
    }).compile();

    controller = module.get<EtablishmentController>(EtablishmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
