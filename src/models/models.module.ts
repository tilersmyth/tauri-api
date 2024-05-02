import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CatModule } from './cat/cat.module';
import { ApiKeyModule } from './api-key/api-key.module';
import { ModuleMiddleware } from './module.middleware';

@Module({
  imports: [ConfigModule.forRoot(), ApiKeyModule, CatModule],
})
export class ModelsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ModuleMiddleware).forRoutes('*');
  }
}
