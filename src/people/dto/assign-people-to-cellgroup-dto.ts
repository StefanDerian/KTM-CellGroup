import {  IsNotEmpty, IsNumber } from "class-validator";
import { CellGroupStatus } from "src/entities/cellgroupsToPeople.entity";


export class AssignPeopleToCellgroupDto {
    
    @IsNotEmpty()
    @IsNumber()
    peopleId: number

    @IsNotEmpty()
    @IsNumber()
    cellgroupId: number

    @IsNotEmpty()
    status: CellGroupStatus
}
