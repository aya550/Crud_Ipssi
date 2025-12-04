import { Activity } from 'src/activity/entities/activity.entity';
import { Address } from 'src/address/entities/address.entity';
import { Branch } from 'src/branch/entities/branch.entity';
import { Code } from 'src/code/entities/code.entity';
import { Contact } from 'src/contact/entities/contact.entity';
import { denomination } from 'src/denomination/entities/denomination.entity';
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

  @OneToMany(() => Activity, (activity) => activity.entreprise)
  activities: Activity[];

  @OneToMany(() => Address, (address) => address.entreprise)
  addresses: Address[];

  @OneToMany(() => Branch, (branch) => branch.entreprise)
  branches: Branch[];

  @OneToMany(() => Code, (code) => code.entreprise)
  codes: Code[];

  @OneToMany(() => Contact, (contact) => contact.entreprise)
  contacts: Contact[];

  @OneToMany(() => denomination, (denomination) => denomination.entreprise)
  denominations: denomination[];
}
