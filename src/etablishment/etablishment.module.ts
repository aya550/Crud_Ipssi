import { Module } from '@nestjs/common';
import { EtablishmentService } from './etablishment.service';
import { EtablishmentController } from './etablishment.controller';

@Module({
  controllers: [EtablishmentController],
  providers: [EtablishmentService],
})
export class EtablishmentModule {}
