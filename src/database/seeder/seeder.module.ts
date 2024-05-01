import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeederService } from './seeder.service';
import { CatEntity } from '../../models/cat/cat.entity';
import { TypeormService } from '../../typeorm/typeorm.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeormService,
      imports: [ConfigModule.forRoot()],
    }),
    TypeOrmModule.forFeature([CatEntity]),
  ],
  providers: [SeederService],
})
export class SeederModule {}
