import { Component } from '@angular/core';

import { TodayPage } from '../today/today';
import { WeekPage } from '../week/week';
import { MonthPage } from '../month/month';

@Component({
    selector: 'page-tabs',
    template: `
      <ion-tabs selectedIndex="1">
        <ion-tab [root]="todayPage" tabTitle="Today"></ion-tab>
        <ion-tab [root]="weekPage" tabTitle="Week"></ion-tab>
        <ion-tab [root]="monthPage" tabTitle="Month"></ion-tab>
      </ion-tabs>
    `
    
})
export class TabsPage {
    todayPage = TodayPage;
    weekPage = WeekPage;
    monthPage = MonthPage;
}