import { Injectable } from '@nestjs/common';
import { CreateEntrepriseDto } from './dto/create-entreprise.dto';
import { UpdateEntrepriseDto } from './dto/update-entreprise.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Entreprise } from './entities/entreprise.entity';
import { Repository } from 'typeorm';
import { denomination } from '../denomination/entities/denomination.entity';

@Injectable()
export class EntrepriseService {
  constructor(
    @InjectRepository(Entreprise)
    private readonly entrepriseRepository: Repository<Entreprise>,
    @InjectRepository(denomination)
    private readonly denominationRepository: Repository<denomination>,
  ) {}

  async create(createEntrepriseDto: CreateEntrepriseDto) {
    const entreprise = this.entrepriseRepository.create(createEntrepriseDto);
    return this.entrepriseRepository.save(entreprise);
  }

  async findOneEntreprise(search: string) {
    let entreprise = await this.entrepriseRepository.findOne({
      where: { enterpriseNumber: search },
    });

    if (!entreprise) {
      const denominationRepo = this[
        'denominationRepository'
      ] as Repository<denomination>;
      const denom = await denominationRepo.findOne({
        where: { denomination: search },
      });
      if (denom) {
        entreprise = await this.entrepriseRepository.findOne({
          where: { enterpriseNumber: denom.entityNumber },
        });
      }
    }

    if (!entreprise) {
      throw new Error('Entreprise not found');
    }
    return entreprise;
  }

  async update(
    enterpriseNumber: string,
    updateEntrepriseDto: UpdateEntrepriseDto,
  ) {
    const entrepriseToUpdate = await this.entrepriseRepository.findOne({
      where: { enterpriseNumber: enterpriseNumber },
    });

    if (!entrepriseToUpdate) {
      throw new Error(`Entreprise with number ${enterpriseNumber} not found.`);
    }

    this.entrepriseRepository.merge(entrepriseToUpdate, updateEntrepriseDto);
    return this.entrepriseRepository.save(entrepriseToUpdate);
  }

  async remove(enterpriseNumber: string) {
    const entrepriseToRemove = await this.entrepriseRepository.findOne({
      where: { enterpriseNumber: enterpriseNumber },
    });

    if (!entrepriseToRemove) {
      throw new Error(`Entreprise with number ${enterpriseNumber} not found.`);
    }

    await this.entrepriseRepository.remove(entrepriseToRemove);

    return `Entreprise ${enterpriseNumber} and its related units have been successfully removed.`;
  }
}
