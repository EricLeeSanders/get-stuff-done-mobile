import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NavController, NavParams } from 'ionic-angular';
import { TaskService } from "../../services/tasks.service";
import { Task } from "../../models/task";

/*
  Reactive approach for creating a form
*/
@Component({
  selector: 'page-edit-task',
  templateUrl: 'edit-task.html'
})
export class EditTaskPage implements OnInit {
  mode = 'New'; // default to new
  currentTask: Task;
  taskForm: FormGroup // All forms for the reactive approach should be FormGroup
  
  constructor( private navParams: NavParams,
               private navCtrl: NavController,
               private taskService: TaskService){}

  ngOnInit(){
    this.mode = this.navParams.get('mode');
    if (this.mode == 'Edit') {
      this.currentTask = this.navParams.get('task');
    }
    this.initalizeForm();
  }

  onSubmit(){
    const value = this.taskForm.value;
    if (this.mode == 'New') {
      let newTask = new Task(1, value.title, value.minutes, value.description); 
      this.taskService.addTask(newTask);
    } else if (this.mode == 'Edit') {
      this.taskService.editTask(this.currentTask, value.title, value.minutes, value.description);
    }
    this.navCtrl.popToRoot();
  }

  private initalizeForm(){
    let title = null;
    let minutes = null;
    let description = null;
    
    if (this.mode == 'Edit') {
      title = this.currentTask.title;
      minutes = this.currentTask.minutes;
      description = this.currentTask.description;
    }
    
    this.taskForm = new FormGroup({
      //(default, validators)
      'title': new FormControl(title, Validators.required),
      'minutes': new FormControl(minutes, Validators.required),
      'description': new FormControl(description)
    });
  }
}
