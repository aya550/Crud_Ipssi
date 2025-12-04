import { Entreprise } from 'src/entreprise/entities/entreprise.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

@Entity('contact')
export class Contact {
  @PrimaryGeneratedColumn()
  entityNumber: string;

  @Column()
  entityContact: string;

  @Column()
  contactType: string;

  @Column()
  value: string;

  @JoinColumn({ name: 'enterpriseNumber' })
  @ManyToOne(() => Entreprise, (entreprise) => entreprise.contacts)
  entreprise: Entreprise;
}
