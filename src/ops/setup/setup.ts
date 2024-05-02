import { NestFactory } from '@nestjs/core';
import { SetupModule } from './setup.module';
import { ApiKeyService } from '../../models/api-key/api-key.service';

(async () => {
  const app = await NestFactory.create(SetupModule, { logger: false });
  const seeder = app.get(ApiKeyService);
  const result = await seeder.create();
  console.log(`Created API key: ${result.id}`);
  await app.close();
})();
