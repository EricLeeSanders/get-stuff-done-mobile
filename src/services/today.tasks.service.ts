import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Task } from "../models/task";
import { TaskService } from "./tasks.service"

@Injectable()
export class TodayTaskService extends TaskService{

    constructor(private storage: Storage){
        super();
    }

    addTask(task: Task) {
        console.log("adding today task");
        super.addTask(task);
        this.storage.set('todayTasks', this.tasks)
            .then()
            .catch(
                err => {
                    // Remove task that was just added
                    this.tasks.splice(this.tasks.indexOf(task), 1);
                }
        
        );
    }
    
    removeTask(task: Task) {
        console.log("removing today tasks and saving");
        super.removeTask(task);
        this.storage.set('todayTasks', this.tasks)
            .then()
            .catch(
                err => console.log(err)
            )
    }
    
    editTask(task: Task, title: string, minutes: number, description: string) {
        console.log("editing today tasks and saving");
        super.editTask(task, title, minutes, description);
    }
    
    fetchTasks(){
        console.log("fetch today tasks");
        return this.storage.get('todayTasks')
        .then(
            (tasks: Task[]) => {
                this.tasks = tasks != null ? tasks : [];
                return this.tasks.slice();
            }    
        )
        .catch(
          err => console.log(err)
        );
    }
}