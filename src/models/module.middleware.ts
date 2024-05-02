import {
  NestMiddleware,
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response, NextFunction } from 'express';
import { ApiKeyService } from './api-key/api-key.service';

@Injectable()
export class ModuleMiddleware implements NestMiddleware {
  constructor(
    private readonly configService: ConfigService,
    private readonly apiKeyService: ApiKeyService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const env = this.configService.get<string>('NODE_ENV');

    if (env === 'development') {
      return next();
    }

    const header_key = req.headers['x-api-key'] as string;

    if (!header_key) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    const key_exists = await this.apiKeyService.findOne(header_key);

    if (!key_exists) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    return next();
  }
}
