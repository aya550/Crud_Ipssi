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
  @PrimaryGeneratedColumn({ name: 'EntityNumber' })
  entityNumber: number;

  @Column({ name: 'ActivityGroup' })
  activityGroup: string;

  @Column({ name: 'NaceVersion' })
  naceVersion: string;

  @Column({ name: 'NaceCode' })
  naceCode: string;

  @Column({ name: 'Classification' })
  classification: string;

  @JoinColumn({
    name: 'EntityNumber',
  })
  @ManyToOne(() => Entreprise, (entreprise) => entreprise.activities)
  entreprise: Entreprise;
}
