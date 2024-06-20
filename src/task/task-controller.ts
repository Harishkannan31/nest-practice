/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post,  Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { TaskService } from "./task-service";
// import { Task } from "./interface/task.interface";
import { Response } from "express";
import { TaskDto } from "./dto/task.dto";

@Controller('task')
export class TaskController{
    constructor(private readonly taskService:TaskService){}
    @Get()
    async getAllTask(@Res() res:Response){
        const data = this.taskService.getAllTasks();
        console.log(data,"request data while getting all tasks")
        return res.status(200).send(data)
    }
    @Post('addtask')
    @UsePipes(new ValidationPipe())
    async createTasks(@Body() task:TaskDto,@Res() res:Response){
        const data = await this.taskService.addTask(task);
        console.log(data,"data from create task controller")
        return res.status(200).send(data)
    }

}