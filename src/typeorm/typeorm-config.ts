import { ConfigService } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';

export const typeOrmConfig = (config: ConfigService): DataSourceOptions => {
  return {
    type: 'postgres',
    host: config.get<string>('DB_HOST'),
    port: config.get<number>('DB_PORT'),
    username: config.get<string>('POSTGRES_USER'),
    password: config.get<string>('POSTGRES_PASSWORD'),
    database: config.get<string>('POSTGRES_DB'),
    entities: [`${__dirname}/../models/**/*.entity.{ts,js}`],
    migrations: [`${__dirname}/../database/migrations/*{.ts,.js}`],
    synchronize: config.get<string>('NODE_ENV') === 'development',
  };
};
