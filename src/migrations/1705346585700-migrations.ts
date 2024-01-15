import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1705346585700 implements MigrationInterface {
    name = 'Migrations1705346585700'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`people\` ADD \`phoneNumber\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`people\` ADD \`email\` varchar(255) NOT NULL`);
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`people\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`people\` DROP COLUMN \`phoneNumber\``);
    }

}
