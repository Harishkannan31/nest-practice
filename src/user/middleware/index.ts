/* eslint-disable prettier/prettier */
import { Injectable,NestMiddleware } from "@nestjs/common";
import { Request, Response } from 'express';


@Injectable()
export class LoggerMiddleware implements NestMiddleware{
    use(req:Request,res:Response,next:any){
    console.log("requested...");
    //condition check can be done here
    next();
    //if condition not met it will get executed
}

}
