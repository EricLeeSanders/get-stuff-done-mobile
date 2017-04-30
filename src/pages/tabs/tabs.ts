import { Component } from '@angular/core';

import { TasksPage } from '../tasks/tasks';
import { TodayTaskService } from "../../services/today.tasks.service";
import { WeekTaskService } from "../../services/week.tasks.service";
import { MonthTaskService } from "../../services/month.tasks.service";

@Component({
    selector: 'page-tabs',
    template: `
      <ion-tabs selectedIndex="1">
        <ion-tab [root]="tasksPage" [rootParams]="{taskService:todayTaskService, type: 'Today'}" tabTitle="Today"></ion-tab>
        <ion-tab [root]="tasksPage" [rootParams]="{taskService:weekTaskService, type: 'Week'}" tabTitle="Week"></ion-tab>
        <ion-tab [root]="tasksPage" [rootParams]="{taskService:monthTaskService, type: 'Month'}" tabTitle="Month"></ion-tab>
      </ion-tabs>
    `
    
})
export class TabsPage {
    tasksPage = TasksPage;
    constructor(private todayTaskService: TodayTaskService,
                private weekTaskService: WeekTaskService,
                private monthTaskService: MonthTaskService){}
}