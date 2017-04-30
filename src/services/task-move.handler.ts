import { Injectable } from '@angular/core';
import { TaskService } from "./tasks.service"
import { TodayTaskService } from "./today.tasks.service"
import { WeekTaskService } from "./week.tasks.service"
import { MonthTaskService } from "./month.tasks.service"
import { Task } from "../models/task";

@Injectable()
export class TaskMoveHandler {
    
    constructor(private todayTaskService: TodayTaskService,
                private weekTaskService: WeekTaskService,
                private monthTaskService: MonthTaskService){}
                
    moveTask(task: Task, currentTaskService: TaskService, destTaskService: string){
        if(destTaskService === 'Today'){
            currentTaskService.removeTask(task);
            this.todayTaskService.addTask(task);
        } else if(destTaskService === 'Week'){
            currentTaskService.removeTask(task);
            this.weekTaskService.addTask(task);
        } else if(destTaskService === 'Month'){
            currentTaskService.removeTask(task);
            this.monthTaskService.addTask(task);
        }
    }
    
}