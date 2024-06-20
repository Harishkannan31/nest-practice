/* eslint-disable prettier/prettier */
export interface Task {
    uuid?: any;
    name:string;
    completed?:boolean;
    description?:string;
    owner?:string;
    duration?:number;
}