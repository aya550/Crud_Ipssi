import { Controller } from '@nestjs/common';
import { EntrepriseService } from './entreprise.service';

@Controller()
export class EntrepriseController {
  constructor(private readonly entrepriseService: EntrepriseService) {}

  //   @Get()
  //   getHello(): string {
  //     return this.entrepriseService.getHello();
  //   }
}
