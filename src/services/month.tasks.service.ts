import { Injectable } from '@angular/core';
import { Task } from "../models/task";
import { TaskService } from "./tasks.service"

export class MonthTaskService extends TaskService{

    constructor(){
        super();
        // Create some fake tasks to begin with
        this.addTask(new Task("Finish App", 240, "Finish the app"));
        this.addTask(new Task("Vet appointment", 60, "Take cat to the vet"));
        this.addTask(new Task("Read entire book", 600, "Read a book"));

    }

    addTask(task: Task) {
        console.log("adding month task");
        super.addTask(task);
    }
    
    removeTask(task: Task) {
        console.log("removing month tasks and saving");
        super.removeTask(task);
    }
    
    editTask(task: Task, title: string, minutes: number, description: string) {
        console.log("editing month tasks and saving");
        super.editTask(task, title, minutes, description);
    }
}