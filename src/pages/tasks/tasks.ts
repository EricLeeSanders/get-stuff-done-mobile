import { Component, OnInit } from '@angular/core';

import { ModalController, NavParams, MenuController, NavController } from 'ionic-angular';

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
  private taskService: TaskService;
  private type: string;

  constructor (private modalCtrl: ModalController,
               private menuCtrl: MenuController,
               private navCtrl: NavController,
               private navParams: NavParams){}
  
    
  ngOnInit(){
    this.taskService = this.navParams.get('taskService');
    this.type = this.navParams.get('type');

  }
  
  // Executed write before page is displayed
  // executes even if page is cached.
  ionViewWillEnter(){
    this.tasks = this.taskService.getTasks();
  }
  
  onViewTask(task: Task){
    const modal = this.modalCtrl.create(TaskPage, {taskService: this.taskService, task: task});
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if(remove){
        this.onRemove(task);
      } else {
        this.tasks = this.taskService.getTasks();
      }
      
    });
  }
  
  onRemove(task: Task){
    this.taskService.removeTask(task);
    this.tasks = this.taskService.getTasks();
  }
  
  onMove(task: Task, dest: string){
    
  }
  
  addNewTask(){
    this.navCtrl.push(EditTaskPage, {taskService: this.taskService, mode: 'New'});
  }
}

