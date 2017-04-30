import { Injectable } from '@angular/core';
import { Task } from "../models/task";
import { TaskService } from "./tasks.service"

@Injectable()
export class TodayTaskService extends TaskService{

    constructor(){
        super();
        // Create some fake tasks to begin with
        this.addTask(new Task("Program", 120, "Program for 2 hours"));
        this.addTask(new Task("Laundry", 60, "Do laundry some time soon"));
        this.addTask(new Task("Homework", 60, "Do all of my homework"));
        this.addTask(new Task("Read", 30, "Read a book from the libary"));
        this.addTask(new Task("Doctor", 5, "Make Dr. appointment"));

    }

    addTask(task: Task) {
        console.log("adding today task");
        super.addTask(task);
    }
    
    removeTask(task: Task) {
        console.log("removing today tasks and saving");
        super.removeTask(task);
    }
    
    editTask(task: Task, title: string, minutes: number, description: string) {
        console.log("editing today tasks and saving");
        super.editTask(task, title, minutes, description);
    }
}