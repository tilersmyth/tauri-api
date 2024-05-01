import { NestFactory } from '@nestjs/core';
import { SeederModule } from './seeder.module';
import { SeederService } from './seeder.service';

const runSeeder = async () => {
  const app = await NestFactory.create(SeederModule);
  const seeder = app.get(SeederService);
  await seeder.run();
  await app.close();
};

runSeeder();
