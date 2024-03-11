import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm"

export class CreateCellgroupTable1706007489308 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cellgroup_people",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "status",
                        type: "varchar",
                    }
                ],
            }),
            true,
        )
        
        await queryRunner.addColumn(
            "cellgroup_people",
            new TableColumn({
                name: "peopleId",
                type: "int",
            }),
        )
        
        await queryRunner.addColumn(
            "cellgroup_people",
            new TableColumn({
                name: "cellgroupsId",
                type: "int",
            }),
        )

        await queryRunner.createForeignKey(
            "cellgroup_people",
            new TableForeignKey({
                columnNames: ["peopleId"],
                referencedColumnNames: ["id"],
                referencedTableName: "people",
                onDelete: "CASCADE",
            }),
        )
        
        await queryRunner.createForeignKey(
            "cellgroup_people",
            new TableForeignKey({
                columnNames: ["cellgroupsId"],
                referencedColumnNames: ["id"],
                referencedTableName: "cellgroup",
                onDelete: "CASCADE",
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
        const cellgroup_people_table = await queryRunner.getTable("cellgroup_people")
        
        const cellgroup_foreignKey = cellgroup_people_table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("cellgroupsId") !== -1,
        )
        const people_foreignKey = cellgroup_people_table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("peopleId") !== -1,
        )
        await queryRunner.dropForeignKey("cellgroup_people", cellgroup_foreignKey)
        await queryRunner.dropForeignKey("cellgroup_people", people_foreignKey)
        await queryRunner.dropColumn("cellgroup_people", "peopleId")
        await queryRunner.dropColumn("cellgroup_people", "cellgroupsId")
        
       
        
        await queryRunner.dropTable("cellgroup_people")
    }

}
