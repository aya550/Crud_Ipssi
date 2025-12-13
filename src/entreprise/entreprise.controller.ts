import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EntrepriseService } from './entreprise.service';
import { CreateEntrepriseDto } from './dto/create-entreprise.dto';
import { UpdateEntrepriseDto } from './dto/update-entreprise.dto';

@Controller('entreprise')
export class EntrepriseController {
  constructor(private readonly entrepriseService: EntrepriseService) {}

  @Post()
  create(@Body() createEntrepriseDto: CreateEntrepriseDto) {
    return this.entrepriseService.create(createEntrepriseDto);
  }

  @Get()
  findAll() {
    return this.entrepriseService.findAll();
  }

  @Get(':search')
  findOneEntreprise(@Param('search') search: string) {
    return this.entrepriseService.findOneEntreprise(search);
  }

  @Patch(':enterpriseNumber')
  update(
    @Param('enterpriseNumber') enterpriseNumber: string,
    @Body() updateEntrepriseDto: UpdateEntrepriseDto,
  ) {
    return this.entrepriseService.update(enterpriseNumber, updateEntrepriseDto);
  }

  @Delete(':enterpriseNumber')
  remove(@Param('enterpriseNumber') enterpriseNumber: string) {
    return this.entrepriseService.remove(enterpriseNumber);
  }
}
