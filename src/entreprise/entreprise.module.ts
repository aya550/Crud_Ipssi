import { Module } from '@nestjs/common';
import { EntrepriseService } from './entreprise.service';
import { EntrepriseController } from './entreprise.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entreprise } from './entreprise';

@Module({
  imports: [TypeOrmModule.forFeature([Entreprise])],
  controllers: [EntrepriseController],
  providers: [EntrepriseService],
  exports: [EntrepriseService],
})
export class EntrepriseModule {}
