import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatDto } from './cat.dto';

@Controller('cats')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get(':id')
  getCat(@Param('id') id: number) {
    return this.catService.getCat(id);
  }

  @Post()
  create(@Body() input: CatDto) {
    return this.catService.create(input);
  }
}
