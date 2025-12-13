import { Entreprise } from 'src/entreprise/entities/entreprise.entity';
import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity('address')
export class Address {
  @PrimaryGeneratedColumn({ name: 'EntityNumber' })
  entityNumber: number;

  @Column({ name: 'TypeOfAddress' })
  typeOfAdress: string;

  @Column({ name: 'CountryNL' })
  countryNL: string;

  @Column({ name: 'CountryFR' })
  countryFR: string;

  @Column({ name: 'Zipcode' })
  zipCode: string;

  @Column({ name: 'MunicipalityNL' })
  municipalityNL: string;

  @Column({ name: 'MunicipalityFR' })
  municipalityFR: string;

  @Column({ name: 'StreetNL' })
  streetNL: string;

  @Column({ name: 'StreetFR' })
  streetFR: string;

  @Column({ name: 'HouseNumber' })
  houseNumber: string;

  @Column({ name: 'Box' })
  box: string;

  @Column({ name: 'ExtraAddressInfo' })
  extraAddressInfo: string;

  @Column({ name: 'DateStrikingOff' })
  dateStrikingOff: string;

  @JoinColumn({ name: 'EntityNumber' })
  @ManyToOne(() => Entreprise, (entreprise) => entreprise.addresses)
  entreprise: Entreprise;
}
