import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionComponent } from './subscription.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { SubscriptionListComponent } from './subscription-list/subscription-list.component';
import { BreadcrumbModule, ButtonModule, CardModule, DataTableModule, DatepickerModule, DropDownModule, FormModule, IconModule, LayoutModule, ModalModule, RadioModule, SearchModule, SelectModule, TextareaModule, TextInputModule, ToggleModule, UploadModule } from 'ng-devui';
import { FormsModule } from '@angular/forms';
import { AddNewComponent } from './subscription-list/add-new/add-new.component';
import { EditComponent } from './subscription-list/edit/edit.component';
import { DayRemainingPipe } from './pipe/day-remaining.pipe';
import { GetCustomerPipe } from './pipe/get-customer.pipe';



@NgModule({
  declarations: [
    SubscriptionComponent,
    ConfigurationComponent,
    SubscriptionListComponent,
    AddNewComponent,
    EditComponent,
    DayRemainingPipe,
    GetCustomerPipe,
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
    SelectModule

  
  ]
})
export class SubscriptionModule { }
