import { Component, OnInit } from '@angular/core';

import { ModalController, MenuController, NavController } from 'ionic-angular';

import { Task } from "../../models/task";
import { TaskService } from "../../services/tasks.service";
import { TaskPage } from "../task/task";
import { EditTaskPage } from "../edit-task/edit-task";

/*
  Generated class for the Tasks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})
export class TasksPage implements OnInit {
  private tasks: Task[];
  
  constructor (protected taskService: TaskService,
               protected modalCtrl: ModalController,
               protected menuCtrl: MenuController,
               protected navCtrl: NavController,
               protected type: String){}
  
    
  ngOnInit(){
    
  }
  
  // Executed write before page is displayed
  // executes even if page is cached.
  ionViewWillEnter(){
    this.tasks = this.taskService.getTasks();
  }
  
  onViewTask(task: Task){
    const modal = this.modalCtrl.create(TaskPage, {task: task});
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if(remove){
        this.onRemove(task);
      }
      this.tasks = this.taskService.getTasks();
    });
  }
  
  onRemove(task: Task){
    this.taskService.removeTask(task);
  }
  
  addNewTask(){
    this.navCtrl.push(EditTaskPage, {mode: 'New'});
  }
}

