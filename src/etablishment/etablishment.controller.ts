import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EtablishmentService } from './etablishment.service';
import { CreateEtablishmentDto } from './dto/create-etablishment.dto';
import { UpdateEtablishmentDto } from './dto/update-etablishment.dto';

@Controller('etablishment')
export class EtablishmentController {
  constructor(private readonly etablishmentService: EtablishmentService) {}

  @Post()
  create(@Body() createEtablishmentDto: CreateEtablishmentDto) {
    return this.etablishmentService.create(createEtablishmentDto);
  }

  @Get()
  findAll() {
    return this.etablishmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.etablishmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEtablishmentDto: UpdateEtablishmentDto) {
    return this.etablishmentService.update(+id, updateEtablishmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.etablishmentService.remove(+id);
  }
}
