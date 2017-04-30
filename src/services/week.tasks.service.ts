import { Injectable } from '@angular/core';
import { Task } from "../models/task";
import { TaskService } from "./tasks.service"

export class WeekTaskService extends TaskService{

    constructor(){
        super();
        // Create some fake tasks to begin with
        this.addTask(new Task("Study", 120, "Study for 2 hours"));
        this.addTask(new Task("Walk Dog", 60, "Walk dog"));
        this.addTask(new Task("Finish Assignment", 60, "Finish english assignment"));

    }

    addTask(task: Task) {
        console.log("adding week task");
        super.addTask(task);
    }
    
    removeTask(task: Task) {
        console.log("removing week tasks and saving");
        super.removeTask(task);
    }
    
    editTask(task: Task, title: string, minutes: number, description: string) {
        console.log("editing week tasks and saving");
        super.editTask(task, title, minutes, description);
    }
}