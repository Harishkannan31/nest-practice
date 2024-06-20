/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
/* eslint-disable prettier/prettier */
export class UserDto {
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email:string;

    @IsString()
    @IsNotEmpty()
    username:string
}

export class userParamDto {
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email:string;
}