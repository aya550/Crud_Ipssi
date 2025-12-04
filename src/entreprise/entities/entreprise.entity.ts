import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('')
export class Entreprise {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  entrepriseNumber: string;

  @Column()
  status: string;

  @Column()
  juridicalSituation: string;

  @Column()
  typeOfEntreprise: string;

  @Column()
  juridicalForm: string;

  @Column()
  juridicalFormCAC: string;

  @Column()
  startDate: string;
}
