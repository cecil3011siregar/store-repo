import { IsNotEmpty } from "class-validator";

export class RegisterDto{
    @IsNotEmpty()
    level:string;

    @IsNotEmpty()
    fullName: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    phoneNumber:string;

    @IsNotEmpty()
    address: string;
}