import { TasksPage } from "../tasks/tasks";
import { TaskService } from "../../services/tasks.service";
import { ModalController, MenuController, NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';


@Injectable()
export class TodayPage extends TasksPage {
  constructor(protected taskService: TaskService,
               protected modalCtrl: ModalController,
               protected menuCtrl: MenuController,
               protected navCtrl: NavController){
    super(taskService, modalCtrl, menuCtrl, navCtrl, "Today");
  }
}
