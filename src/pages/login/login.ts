import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { TasksPage } from "../tasks/tasks";

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private toastCtrl: ToastController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  onSignIn(){
    let toast = this.toastCtrl.create({
      message: 'Sign in not implemented',
      duration: 3000,
      position: 'top'
    });
    
    
    toast.present();
  }
}
