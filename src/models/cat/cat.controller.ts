import { Controller, Get, Param } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cats')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get(':id')
  getCat(@Param('id') id: number) {
    return this.catService.getCat(id);
  }
}
