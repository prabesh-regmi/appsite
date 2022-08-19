import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionComponent } from './subscription.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { SubscriptionListComponent } from './subscription-list/subscription-list.component';
import { BreadcrumbModule, ButtonModule, CardModule, DataTableModule, DatepickerModule, DropDownModule, FormModule, IconModule, LayoutModule, ModalModule, PaginationModule, RadioModule, SearchModule, SelectModule, TextareaModule, TextInputModule, ToggleModule, UploadModule } from 'ng-devui';
import { FormsModule } from '@angular/forms';
import { AddNewComponent } from './subscription-list/add-new/add-new.component';
import { EditComponent } from './subscription-list/edit/edit.component';
import { DayRemainingPipe } from './pipe/day-remaining.pipe';
import { GetCustomerPipe } from './pipe/get-customer.pipe';
import { AddNewConfigurationComponent } from './configuration/add-new-configuration/add-new-configuration.component';
import { FinanceSummeryComponent } from './finance-summery/finance-summery.component';
import { PushNotificationComponent } from './push-notification/push-notification.component';
import { NotificationHistoryComponent } from './notification-history/notification-history.component';
import { SubscriptionMessageSettingComponent } from './subscription-message-setting/subscription-message-setting.component';
import { GetPaymentPipe } from './pipe/get-payment.pipe';
import { SingleFinanceSummeryComponent } from './finance-summery/single-finance-summery/single-finance-summery.component';
import { GetHistoryPipe } from './pipe/get-history.pipe';
import { PushNotifyComponent } from './push-notification/push-notify/push-notify.component';
import { LoyaltyConfigurationComponent } from './loyalty-configuration/loyalty-configuration.component';
import { LoyaltyCardComponent } from './loyalty-configuration/loyalty/loyalty-card/loyalty-card.component';
import { LoyaltyTypeComponent } from './loyalty-configuration/loyalty/loyalty-type/loyalty-type.component';
import { LoyaltyComponent } from './loyalty-configuration/loyalty/loyalty.component';
import { MessageSettingComponent } from './loyalty-configuration/message-setting/message-setting.component';



@NgModule({ 
  declarations: [
    SubscriptionComponent,
    ConfigurationComponent,
    SubscriptionListComponent,
    AddNewComponent,
    EditComponent,
    DayRemainingPipe,
    GetCustomerPipe,
    AddNewConfigurationComponent,
    FinanceSummeryComponent, 
    PushNotificationComponent,
    NotificationHistoryComponent, 
    SubscriptionMessageSettingComponent,
    GetPaymentPipe, 
    SingleFinanceSummeryComponent, 
    GetHistoryPipe, 
    PushNotifyComponent, 
    LoyaltyConfigurationComponent, 
    LoyaltyCardComponent, 
    LoyaltyTypeComponent,
    LoyaltyComponent,
    MessageSettingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SubscriptionRoutingModule,
    CardModule,
    LayoutModule,
    TextInputModule,
    TextareaModule,
    DatepickerModule,
    ToggleModule,
    ButtonModule,
    FormModule,
    BreadcrumbModule,
    ModalModule,
    SearchModule,
    DropDownModule,
    IconModule,
    DataTableModule,
    UploadModule,
    RadioModule,
    SelectModule,
    PaginationModule,
  
  ]
})
export class SubscriptionModule { }
