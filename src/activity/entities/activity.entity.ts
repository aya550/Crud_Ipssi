import { Entreprise } from 'src/entreprise/entities/entreprise.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

@Entity('activity')
export class Activity {
  @PrimaryGeneratedColumn()
  entityNumber: number;

  @Column()
  activityGroup: string;

  @Column()
  naceVersion: string;

  @Column()
  naceCode: string;

  @Column()
  classification: string;

  @JoinColumn({ name: 'EnterpriseNumber' })
  @ManyToOne(() => Entreprise, (entreprise) => entreprise.activities)
  entreprise: Entreprise;
}
