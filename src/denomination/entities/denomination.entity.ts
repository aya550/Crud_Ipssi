import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Entreprise } from 'src/entreprise/entities/entreprise.entity';
import { ManyToOne, JoinColumn } from 'typeorm';
@Entity('denomination')
export class denomination {
  @PrimaryGeneratedColumn()
  entityNumber: string;

  @Column()
  language: string;

  @Column()
  typeOfDenomination: string;

  @Column()
  denomination: string;

  @JoinColumn({ name: 'enterpriseNumber' })
  @ManyToOne(() => Entreprise, (entreprise) => entreprise.denominations)
  entreprise: Entreprise;
}
