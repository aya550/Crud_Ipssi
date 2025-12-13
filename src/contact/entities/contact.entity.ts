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
  @PrimaryGeneratedColumn({ name: 'EntityNumber' })
  entityNumber: string;

  @Column({ name: 'EntityContact' })
  entityContact: string;

  @Column({ name: 'ContactType' })
  contactType: string;

  @Column({ name: 'Value' })
  value: string;

  @JoinColumn({
    name: 'EntityNumber',
  })
  @ManyToOne(() => Entreprise, (entreprise) => entreprise.contacts)
  entreprise: Entreprise;
}
