import { Component } from '@angular/core';
// ViewController controls the currently visible/active page
// NavParams used to pass data
import { ViewController, NavParams, NavController } from 'ionic-angular';
import { EditTaskPage } from '../edit-task/edit-task';
import { Task } from "../../models/task";
import { TaskService } from "../../services/tasks.service";

/*
  Generated class for the Task page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-task',
  templateUrl: 'task.html'
})
export class TaskPage {
  // title: string;
  // description: string;
  // minutes: number;
  private task: Task;
  private taskService: TaskService;
  
  constructor (private viewCtrl: ViewController,
               private navParams: NavParams,
               private navCtrl: NavController){}
      
 ionViewDidLoad() {
  // this.title = this.navParams.get('title');
  // this.description = this.navParams.get('description');
  // this.minutes = this.navParams.get('minutes');
    this.task = this.navParams.get('task');
    this.taskService = this.navParams.get('taskService');
 }

  // default to false. Supplying an argument will override
  onClose(remove = false) {
    this.viewCtrl.dismiss(remove);
  }
  
  onEdit(){
    this.navCtrl.push(EditTaskPage, {taskService: this.taskService, mode: 'Edit', task: this.task });
    //this.viewCtrl.dismiss();
  }
  
}
