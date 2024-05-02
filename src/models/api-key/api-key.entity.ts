import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('api_keys')
export class ApiKeyEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
