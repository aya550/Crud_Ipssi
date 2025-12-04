import { Entreprise } from 'src/entreprise/entities/entreprise.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

@Entity('branch')
export class Branch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: string;

  @Column()
  entrepriseNumber: string;

  @JoinColumn({ name: 'enterpriseNumber' })
  @ManyToOne(() => Entreprise, (entreprise) => entreprise.branches)
  entreprise: Entreprise;
}
