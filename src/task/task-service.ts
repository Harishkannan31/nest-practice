/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Task } from "./interface/task.interface";
import { TaskStoreService } from "./task-store.service";

@Injectable()

export class TaskService{
    createTask() {
        throw new Error("Method not implemented.");
    }
    constructor(private readonly taskStoreService:TaskStoreService){}

    public async addTask(task:Task):Promise<Task>{
        task.uuid=uuidv4(),
        task.completed=false,
        task.description="This is the sample task",
        task.duration=2,
        task.owner='Harish'
        this.taskStoreService.addTask(task)
        return task;
    }

    public async getTask(id:string):Promise<Task>{
        return this.taskStoreService.getTask(id)
    }

    public async getAllTasks():Promise<Task[]>{
        return Promise.resolve(this.taskStoreService.getAllTasks());
    }

}


function uuidv4(): any {
    throw new Error("Function not implemented.");
}

