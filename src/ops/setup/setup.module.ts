import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormService } from '../../typeorm/typeorm.service';
import { ConfigModule } from '@nestjs/config';
import { ApiKeyModule } from '../../models/api-key/api-key.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeormService,
      imports: [ConfigModule.forRoot()],
    }),
    ApiKeyModule,
  ],
})
export class SetupModule {}
