import { NgModule } from '@angular/core';
import { DialogService, BackTopModule } from 'ng-devui';
import { SharedModule } from '../@shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DaLayoutModule } from '../@shared/layouts/da-layout';
import { FinanceSummeryComponent } from './subscription/finance-summery/finance-summery.component';
import { PushNotificationComponent } from './subscription/push-notification/push-notification.component';
import { NotificationHistoryComponent } from './subscription/notification-history/notification-history.component';
import { SubscriptionMessageSettingComponent } from './subscription/subscription-message-setting/subscription-message-setting.component';

@NgModule({
  imports: [PagesRoutingModule, SharedModule, BackTopModule, DaLayoutModule],
  declarations: [PagesComponent, FinanceSummeryComponent, PushNotificationComponent, NotificationHistoryComponent, SubscriptionMessageSettingComponent],
  providers: [DialogService]
})
export class PagesModule {}
