import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { CatEntity } from './cat.entity';
import { Repository } from 'typeorm';
import { CatDto } from './cat.dto';

// const CATS: CatDto[] = [
//   {
//     id: 1,
//     name: 'Fur Ball Fred',
//     hobby: 'Playing',
//   },
//   { id: 2, name: 'Lazy Larry', hobby: 'Sleeping' },
//   {
//     id: 3,
//     name: 'Cranky Cris',
//     hobby: 'Biting',
//   },
// ];

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(CatEntity)
    private repo: Repository<CatEntity>,
  ) {}

  getCat(id: number) {
    return this.repo.findOneBy({ id });
  }

  create(input: CatDto) {
    const cat = new CatEntity();
    cat.name = input.name;
    cat.hobby = input.hobby;
    return this.repo.save(cat);
  }
}
