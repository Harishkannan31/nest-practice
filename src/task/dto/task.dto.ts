/* eslint-disable prettier/prettier */
import { IsDefined, IsEmpty, IsString } from "class-validator";

export class TaskDto{
    @IsDefined()
    @IsEmpty()
    @IsString()
    name:string;
}