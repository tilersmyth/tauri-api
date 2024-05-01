import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { CatEntity } from '../../models/cat/cat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(CatEntity)
    private catRepo: Repository<CatEntity>,
  ) {}

  private async seedCats() {
    const cats: CatEntity[] = [
      {
        id: 1,
        name: 'Fur Ball Fred',
        hobby: 'Playing',
      },
      { id: 2, name: 'Lazy Larry', hobby: 'Sleeping' },
      {
        id: 3,
        name: 'Cranky Cris',
        hobby: 'Biting',
      },
    ];

    await this.catRepo.save(cats);
  }

  async run() {
    await this.seedCats();
  }
}
