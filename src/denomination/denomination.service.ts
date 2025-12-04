import { Injectable } from '@nestjs/common';
import { CreateDenominationDto } from './dto/create-denomination.dto';
import { UpdateDenominationDto } from './dto/update-denomination.dto';

@Injectable()
export class DenominationService {
  create(createDenominationDto: CreateDenominationDto) {
    return 'This action adds a new denomination';
  }

  findAll() {
    return `This action returns all denomination`;
  }

  findOne(id: number) {
    return `This action returns a #${id} denomination`;
  }

  update(id: number, updateDenominationDto: UpdateDenominationDto) {
    return `This action updates a #${id} denomination`;
  }

  remove(id: number) {
    return `This action removes a #${id} denomination`;
  }
}
