import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DenominationService } from './denomination.service';
import { CreateDenominationDto } from './dto/create-denomination.dto';
import { UpdateDenominationDto } from './dto/update-denomination.dto';

@Controller('denomination')
export class DenominationController {
  constructor(private readonly denominationService: DenominationService) {}

  @Post()
  create(@Body() createDenominationDto: CreateDenominationDto) {
    return this.denominationService.create(createDenominationDto);
  }

  @Get()
  findAll() {
    return this.denominationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.denominationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDenominationDto: UpdateDenominationDto) {
    return this.denominationService.update(+id, updateDenominationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.denominationService.remove(+id);
  }
}
