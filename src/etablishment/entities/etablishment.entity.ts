import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Entreprise } from 'src/entreprise/entities/entreprise.entity';

@Entity('establishment')
export class Etablishment {
  @PrimaryGeneratedColumn({ name: 'EstablishmentNumber' })
  establishmentNumber: string;

  @Column({ name: 'StartDate' })
  startDate: string;

  @Column({ name: 'EnterpriseNumber' })
  entrepriseNumber: string;

  @JoinColumn({
    name: 'EnterpriseNumber',
    referencedColumnName: 'enterpriseNumber',
  })
  @ManyToOne(() => Entreprise, (entreprise) => entreprise.etablishments)
  entreprise: Entreprise;
}
