import { IsDate, IsDateString, IsNotEmpty, IsPhoneNumber, Length, IsEmail, isUppercase } from "class-validator";
import { isFirstLetterUppercase } from "src/utils/validations/firstLetterUppercase";


export class CreatePeopleDto {
    
    @IsNotEmpty()
    @Length(10, 20)
    @isFirstLetterUppercase({message: 'first letter need to be capital'})
    firstName: string;

    @isFirstLetterUppercase()
    lastName: string;

    @IsDateString()
    @IsNotEmpty()
    dob: Date;

    @IsPhoneNumber()
    phoneNumber: string

    @IsEmail()
    email: string
}



