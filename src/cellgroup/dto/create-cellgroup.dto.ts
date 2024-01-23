import { IsEnum, IsNotEmpty, Length, isEnum } from "class-validator";
import { Day } from "src/utils/enum/day";
import { Frequency } from "src/utils/enum/frequency";
import { Status } from "src/utils/enum/status";
import { isFirstLetterUppercase } from "src/utils/validations/firstLetterUppercase";



export class CreateCellgroupDto {

    @IsNotEmpty()
    @Length(10, 20)
    @isFirstLetterUppercase({message: 'first letter need to be capital'})
    name: string;

    @IsNotEmpty()
    @IsEnum(Day)
    day: Day;

    @IsNotEmpty()
    @IsEnum(Frequency)
    frequency: Frequency;

    @IsNotEmpty()
    @IsEnum(Status)
    status: Status;

}
