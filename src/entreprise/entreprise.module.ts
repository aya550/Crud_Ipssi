import { Module } from '@nestjs/common';
import { EntrepriseService } from './entreprise.service';
import { EntrepriseController } from './entreprise.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entreprise } from './entities/entreprise.entity';
import { denomination } from '../denomination/entities/denomination.entity';
import { Address } from '../address/entities/address.entity';
import { Activity } from '../activity/entities/activity.entity';
import { Branch } from '../branch/entities/branch.entity';
import { Code } from '../code/entities/code.entity';
import { Contact } from '../contact/entities/contact.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      denomination,
      Entreprise,
      Address,
      Activity,
      Branch,
      Code,
      Contact,
    ]),
  ],
  controllers: [EntrepriseController],
  providers: [EntrepriseService],
})
export class EntrepriseModule {}
