import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityModule } from './activity/activity.module';
import { AddressModule } from './address/address.module';
import { BranchModule } from './branch/branch.module';
import { CodeModule } from './code/code.module';
import { ContactModule } from './contact/contact.module';
import { DenominationModule } from './denomination/denomination.module';
import { EtablishmentModule } from './etablishment/etablishment.module';
import { EntrepriseModule } from './entreprise/entreprise.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'aya',
      password: '',
      database: 'crud_kbo',
      autoLoadEntities: true,
      synchronize: false,
    }),
    ActivityModule,
    AddressModule,
    BranchModule,
    CodeModule,
    ContactModule,
    DenominationModule,
    EtablishmentModule,
    EntrepriseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
