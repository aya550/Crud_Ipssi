import { PartialType } from '@nestjs/mapped-types';
import { CreateDenominationDto } from './create-denomination.dto';

export class UpdateDenominationDto extends PartialType(CreateDenominationDto) {}
