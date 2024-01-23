import { Entity, Column, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { People } from "../people/entities/people.entity"
import { Cellgroup } from "../cellgroup/entities/cellgroup.entity"


export enum CellGroupStatus {
    VISIT = "Visit",
    TEMPORARY = "Temporary",
    PERMANENT = "Permanent"
}


@Entity()
export class CellgroupToPeople {
   
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({
        type: "enum",
        enum: CellGroupStatus,
        default: CellGroupStatus.VISIT,
    })
    status: CellGroupStatus

    
    @ManyToOne(() => Cellgroup, (cellgroup) => cellgroup.cellgroupsToPeople)
    public cellgroups: Cellgroup

    
    @ManyToOne(() => People, (people) => people.cellgroupsToPeople)
    public people: People

    
}