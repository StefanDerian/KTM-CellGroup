import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePeopleTable1699958022835 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "people",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "firstname",
                        type: "varchar",
                    },
                    {
                        name: "lastname",
                        type: "varchar",
                    },
                    {
                        name: "dob",
                        type: "timestamp",
                    },
                    {
                        name: "phoneNumber",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                ],
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("people")
    }

}
