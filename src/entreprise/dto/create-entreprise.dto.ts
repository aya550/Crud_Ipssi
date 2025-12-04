import { IsOptional, IsString } from 'class-validator';
import { Address } from '../../address/entities/address.entity';
import { Activity } from 'src/activity/entities/activity.entity';
import { Branch } from 'src/branch/entities/branch.entity';
import { Contact } from 'src/contact/entities/contact.entity';
import { Code } from 'src/code/entities/code.entity';

export class CreateEntrepriseDto {
  @IsString()
  entrepriseNumber: string;

  @IsString()
  status: string;

  @IsString()
  juridicalSituation: string;

  @IsString()
  typeOfEntreprise: string;

  @IsString()
  juridicalForm: string;

  @IsString()
  juridicalFormCAC: string;

  @IsString()
  startDate: string;

  @IsOptional()
  activities: Activity[];

  @IsOptional()
  addresses: Address[];

  @IsOptional()
  branches: Branch[];

  @IsOptional()
  codes: Code[];

  @IsOptional()
  contacts: Contact[];
}
