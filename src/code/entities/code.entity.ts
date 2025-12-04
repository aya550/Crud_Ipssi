import { Entreprise } from 'src/entreprise/entities/entreprise.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

@Entity('code')
export class Code {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column()
  code: string;

  @Column()
  language: string;

  @Column()
  description: string;

  @JoinColumn({ name: 'enterpriseNumber' })
  @ManyToOne(() => Entreprise, (entreprise) => entreprise.codes)
  entreprise: Entreprise;
}
