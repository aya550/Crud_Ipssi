import { Module } from '@nestjs/common';
import { DenominationService } from './denomination.service';
import { DenominationController } from './denomination.controller';

@Module({
  controllers: [DenominationController],
  providers: [DenominationService],
})
export class DenominationModule {}
