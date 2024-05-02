import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiKeyEntity } from './api-key.entity';

@Injectable()
export class ApiKeyService {
  constructor(
    @InjectRepository(ApiKeyEntity)
    private repo: Repository<ApiKeyEntity>,
  ) {}

  async create() {
    const api_key = new ApiKeyEntity();
    return this.repo.save(api_key);
  }

  async findOne(id: string) {
    return this.repo.findOneBy({ id });
  }
}
