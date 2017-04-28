import { Injectable } from '@angular/core';
import { Task } from "../models/task";

@Injectable()
export class TaskService {
    private tasks: Task[] = [];

    constructor(){
        // Create some fake tasks to begin with
        this.addTask(new Task(1, "Program", 120, "Program for 2 hours"));
        this.addTask(new Task(2, "Laundry", 60, "Do laundry some time soon"));
        this.addTask(new Task(3, "Homework", 60, "Do all of my homework"));
        this.addTask(new Task(4, "Read", 30, "Read a book from the libary"));
        this.addTask(new Task(5, "Doctor", 5, "Make Dr. appointment"));

    }
    
    addTask(task: Task) {
        this.tasks.push(task);
    }
    
    removeTask(task: Task) {
        const position = this.tasks.findIndex((t: Task) => {
           return  t.id == task.id;
        });
        this.tasks.splice(position, 1);
    }
    
    editTask(task: Task, title: string, minutes: number, description: string) {
        
        const position = this.tasks.findIndex((t: Task) => {
           return  t.id == task.id;
        });
        
        task.title = title;
        task.minutes = minutes;
        task.description = description;

        
    }
    
    getTasks() {
        // return copy
        return this.tasks.slice();
    }
}