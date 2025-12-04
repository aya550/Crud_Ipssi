import { PartialType } from '@nestjs/mapped-types';
import { CreateEtablishmentDto } from './create-etablishment.dto';

export class UpdateEtablishmentDto extends PartialType(CreateEtablishmentDto) {}
