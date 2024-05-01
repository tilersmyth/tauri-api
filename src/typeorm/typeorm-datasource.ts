import { DataSource } from 'typeorm';
import { typeOrmConfig } from './typeorm-config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { ConfigService } from '@nestjs/config';

const dataSource = async () => {
  const app = await NestFactory.createApplicationContext(AppModule);
  const config = app.get(ConfigService);
  return new DataSource(typeOrmConfig(config));
};

export default dataSource();
