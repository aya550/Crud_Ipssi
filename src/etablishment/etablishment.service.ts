import { Injectable } from '@nestjs/common';
import { CreateEtablishmentDto } from './dto/create-etablishment.dto';
import { UpdateEtablishmentDto } from './dto/update-etablishment.dto';

@Injectable()
export class EtablishmentService {
  create(createEtablishmentDto: CreateEtablishmentDto) {
    return 'This action adds a new etablishment';
  }

  findAll() {
    return `This action returns all etablishment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} etablishment`;
  }

  update(id: number, updateEtablishmentDto: UpdateEtablishmentDto) {
    return `This action updates a #${id} etablishment`;
  }

  remove(id: number) {
    return `This action removes a #${id} etablishment`;
  }
}
