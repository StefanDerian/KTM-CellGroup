import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCellgroupTable1705512667272 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cellgroup",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "day",
                        type: "varchar",
                    },
                    {
                        name: "frequency",
                        type: "varchar",
                    },
                    {
                        name: "status",
                        type: "varchar",
                    }
                ],
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cellgroup")
    }

}
