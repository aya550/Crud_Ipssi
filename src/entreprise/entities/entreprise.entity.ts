import { Activity } from 'src/activity/entities/activity.entity';
import { Address } from 'src/address/entities/address.entity';
import { Branch } from 'src/branch/entities/branch.entity';
import { Code } from 'src/code/entities/code.entity';
import { Contact } from 'src/contact/entities/contact.entity';
import { denomination } from 'src/denomination/entities/denomination.entity';
import { Etablishment } from 'src/etablishment/entities/etablishment.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('enterprise')
export class Entreprise {
  @PrimaryGeneratedColumn({ name: 'EnterpriseNumber' })
  enterpriseNumber: string;

  @Column({ name: 'Status' })
  status: string;

  @Column({ name: 'JuridicalSituation' })
  juridicalSituation: string;

  @Column({ name: 'TypeOfEnterprise' })
  typeOfEnterprise: string;

  @Column({ name: 'JuridicalForm' })
  juridicalForm: string;

  @Column({ name: 'JuridicalFormCAC' })
  juridicalFormCAC: string;

  @Column({ name: 'StartDate' })
  startDate: string;

  @OneToMany(() => Activity, (activity) => activity.entreprise, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  activities: Activity[];

  @OneToMany(() => Address, (address) => address.entreprise, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  addresses: Address[];

  @OneToMany(() => Branch, (branch) => branch.entreprise, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  branches: Branch[];

  @OneToMany(() => Code, (code) => code.entreprise, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  codes: Code[];

  @OneToMany(() => Contact, (contact) => contact.entreprise, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  contacts: Contact[];

  @OneToMany(() => denomination, (denomination) => denomination.entreprise, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  denominations: denomination[];

  @OneToMany(() => Etablishment, (etablishment) => etablishment.entreprise, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  etablishments: Etablishment[];
}
