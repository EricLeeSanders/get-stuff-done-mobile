import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TaskPage } from '../pages/task/task';
import { TasksPage } from '../pages/tasks/tasks';
import { TodayPage } from '../pages/today/today';
import { WeekPage } from '../pages/week/week';
import { MonthPage } from '../pages/month/month';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { EditTaskPage } from '../pages/edit-task/edit-task';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TaskService } from '../services/tasks.service';

@NgModule({
  // Declares components, directives, and pipes that are used in this module.
  declarations: [
    MyApp,
    TaskPage,
    TasksPage,
    TodayPage,
    WeekPage,
    MonthPage,
    TabsPage,
    LoginPage,
    EditTaskPage
  ],
  // makes the exported declarations of other modules available in the current module
  imports: [
    // Configures ionic to wrap around our app
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  // Tells the offline template compiler to compile
  // and create factories (which will later create instances) for the 
  // components listed. This basically just informs Angular that these 
  // components will be used.
  // A component loaded via selector do not need to be listed.
  entryComponents: [
    MyApp,
    TaskPage,
    TasksPage,
    TodayPage,
    WeekPage,
    MonthPage,
    TabsPage,
    LoginPage,
    EditTaskPage
  ],
  // makes services and modules known to DI. Injected into other services
  // and modules.
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TaskService
  ]
})
export class AppModule {}
