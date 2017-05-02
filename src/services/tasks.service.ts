import { Task } from "../models/task";

export abstract class TaskService {
    protected tasks: Task[] = [];


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
    
    abstract fetchTasks();
}