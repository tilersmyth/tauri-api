import { Module } from '@nestjs/common';
import { ApiKeyService } from './api-key.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiKeyEntity } from './api-key.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ApiKeyEntity])],
  providers: [ApiKeyService],
  exports: [ApiKeyService],
})
export class ApiKeyModule {}
