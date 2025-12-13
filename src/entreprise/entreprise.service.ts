import { Injectable } from '@nestjs/common';
import { CreateEntrepriseDto } from './dto/create-entreprise.dto';
import { UpdateEntrepriseDto } from './dto/update-entreprise.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Entreprise } from './entities/entreprise.entity';
import { Repository } from 'typeorm';
import { denomination } from '../denomination/entities/denomination.entity';
import { NotFoundException } from '@nestjs/common';

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

  async findAll() {
    return this.entrepriseRepository.find({
      relations: [
        'denominations',
        'etablishments',
        'contacts',
        'addresses',
        'activities',
      ],
    });
  }

  async findOneEntreprise(search: string) {
    let entreprise = await this.entrepriseRepository.findOne({
      where: { enterpriseNumber: search },
      relations: [
        'denominations',
        'etablishments',
        'contacts',
        'addresses',
        'activities',
      ],
    });

    if (!entreprise) {
      const denom = await this.denominationRepository.findOne({
        where: { denomination: search },
        relations: ['entreprise'],
      });

      if (denom && denom.entreprise) {
        entreprise = await this.entrepriseRepository.findOne({
          where: { enterpriseNumber: denom.entreprise.enterpriseNumber },
          relations: [
            'denominations',
            'etablishments',
            'contacts',
            'addresses',
            'activities',
          ],
        });
      }
    }

    if (!entreprise) {
      throw new NotFoundException('Entreprise not found');
    }
    return entreprise;
  }

  async update(
    enterpriseNumber: string,
    updateEntrepriseDto: UpdateEntrepriseDto,
  ) {
    const entrepriseToUpdate = await this.entrepriseRepository.findOne({
      where: { enterpriseNumber: enterpriseNumber },
      relations: ['addresses'],
    });

    if (!entrepriseToUpdate) {
      throw new NotFoundException(
        `Entreprise with number ${enterpriseNumber} not found.`,
      );
    }

    this.entrepriseRepository.merge(entrepriseToUpdate, updateEntrepriseDto);

    const savedEntreprise =
      await this.entrepriseRepository.save(entrepriseToUpdate);

    return savedEntreprise;
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
