import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Entreprise } from 'src/entreprise/entities/entreprise.entity';
import { ManyToOne, JoinColumn } from 'typeorm';
@Entity('denomination')
export class denomination {
  @PrimaryGeneratedColumn({ name: 'EntityNumber' })
  entityNumber: string;

  @Column({ name: 'EntityNumber', primary: true })
  @Column({ name: 'Language' })
  language: string;

  @Column({ name: 'TypeOfDenomination' })
  typeOfDenomination: string;

  @Column({ name: 'Denomination' })
  denomination: string;

  @JoinColumn({
    name: 'EntityNumber',
    referencedColumnName: 'enterpriseNumber',
  })
  @ManyToOne(() => Entreprise, (entreprise) => entreprise.denominations)
  entreprise: Entreprise;
}
