import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1714417360970 implements MigrationInterface {
    name = 'Migration1714417360970'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cats" ("id" SERIAL NOT NULL, "name" text NOT NULL, "hobby" text NOT NULL, CONSTRAINT "PK_611e3c0a930b4ddc1541422864c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cats"`);
    }

}
