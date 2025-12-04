import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntrepriseService } from './entreprise/entreprise.service';
import { EntrepriseModule } from './entreprise/entreprise.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'crud_kbo',
      autoLoadEntities: true,
      synchronize: false,
    }),
    EntrepriseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
