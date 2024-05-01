import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [ConfigModule.forRoot(), CatModule],
})
export class ModelsModule {}
