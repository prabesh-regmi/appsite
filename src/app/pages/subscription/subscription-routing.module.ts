import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './configuration/configuration.component';
import { FinanceSummeryComponent } from './finance-summery/finance-summery.component';
import { NotificationHistoryComponent } from './notification-history/notification-history.component';
import { PushNotificationComponent } from './push-notification/push-notification.component';
import { SubscriptionListComponent } from './subscription-list/subscription-list.component';
import { SubscriptionMessageSettingComponent } from './subscription-message-setting/subscription-message-setting.component';
import { SubscriptionComponent } from './subscription.component';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionComponent,
    children: [
      { path: 'subscription-list', component: SubscriptionListComponent },
      { path: 'finance-summery', component: FinanceSummeryComponent },
      { path: 'push-notification', component: PushNotificationComponent },
      { path: 'notification-history', component: NotificationHistoryComponent },
      { path: 'subscription-message-setting', component: SubscriptionMessageSettingComponent },
      { path: 'configuration', component: ConfigurationComponent },
      { path: '', redirectTo: 'subscription-list', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule { }
