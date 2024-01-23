import { CellgroupToPeople } from "../../entities/cellgroupsToPeople.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Day } from "../../utils/enum/day";
import { Frequency } from "../../utils/enum/frequency";
import { Status } from "../../utils/enum/status";

@Entity()
export class Cellgroup {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        type: "enum",
        enum: Day,
        default: Day.FRIDAY,
    })
    day: Day;

    @Column({
        type: "enum",
        enum: Frequency,
        default: Frequency.WEEKLY,
    })
    frequency: Frequency;

    @Column({
        type: "enum",
        enum: Status,
        default: Status.ACTIVE,
    })
    status: Status;

    @OneToMany(() => CellgroupToPeople, cellgroupToPeople => cellgroupToPeople.cellgroups)
    public cellgroupsToPeople : CellgroupToPeople[];
}
