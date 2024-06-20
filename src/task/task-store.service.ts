/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Task } from "./interface/task.interface";

@Injectable()

export class TaskStoreService{
    public task:Task[] = [];

    public async addTask(task:Task):Promise<Task>{
        this.task.push(task)
        return Promise.resolve(task);
    }

    public async getTask(id:string):Promise<Task>{
        const filteredTask = this.task.filter(i=>i.uuid===id);
        return filteredTask[0];
    }

    public async getAllTasks():Promise<Task[]>{
        console.log(this.task)
        return Promise.resolve(this.task);
    }
}
