import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormService } from './typeorm/typeorm.service';
import { ConfigModule } from '@nestjs/config';
import { ModelsModule } from './models/models.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeormService,
      imports: [ConfigModule.forRoot()],
    }),
    ModelsModule,
  ],
})
export class AppModule {}
