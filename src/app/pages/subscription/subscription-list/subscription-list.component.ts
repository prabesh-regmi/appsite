import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng-devui/modal';
import { AddNewComponent } from './add-new/add-new.component';
import { CustomerDataList } from './customerDataList';
import { EditComponent } from './edit/edit.component';

interface Customer {
  id: string;
  fullName: string;
  email: string;
  gender: string;
  bloodGroup: string;
  address: string;
  healthStatus: string;
  program: string;
  subscriptionType: string;
  shift: string;
  credit: string;
  startDate: string;
  expireOn: string;
  phoneNumber: string;
  planPrice: string;
  pay: string;
  duePayment: string;
  assignBy: string;
  profileImg: any;
  status: boolean;
  freeze: boolean;
  emergencyContact: {
    fullName: string;
    contactNumber: string;
    optContactNumber: string;
    relationship: string;
  };
}

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.scss'],
})
export class SubscriptionListComponent implements OnInit {
  customerData: Customer[] = [];
  editCustomerData: { [key: string]: { data: Customer } } = {};
  rotateDegrees = 0;

  searchName: string = null;
  searchStatus: string = null;
  searchProgram: string = null;
  searchShift: string = null;
  searchType: string = null;
  searchCredit: string = null;

  optionhName: any = null;
  optionStatus: any = null;
  optionProgram: any = null;
  optionShift: any = null;
  optionType: any = null;
  optionCredit: any = null;

  constructor(private dialogService: DialogService) {}
  onToggle(event: any) {
    console.log(event);
    this.rotateDegrees = event ? 180 : 0;
  }
  openAddDialog() {
    const results = this.dialogService.open({
      width: '70%',
      maxHeight: '500px',
      title: 'Add New Customer',
      content: AddNewComponent,
      backdropCloseable: true,
      buttons: [],
      data: {
        updateData: (value: any) => {
          this.customerData.push(value);
        },
        close: () => {
          console.log('tag created');
          results.modalInstance.hide();
        },
      },
    });
  }

  openEditDialog(index: number, preview: boolean) {
    const results = this.dialogService.open({
      width: '50%',
      maxHeight: '500px',
      title: 'Edit Customer',
      content: EditComponent,
      backdropCloseable: true,
      buttons: [],
      data: {
        preview: preview,
        customer: this.customerData[index],
        updateData: (value: any) => {
          this.customerData[index] = value;
        },
        close: () => {
          results.modalInstance.hide();
        },
      },
    });
  }

  ngOnInit(): void {
    this.customerData = CustomerDataList;
    this.optionStatus = [
      ...new Set(
        this.customerData.map((item) => {
          return item.status ? 'Active' : 'Freeze';
        })
      ),
    ];
    this.optionProgram = [...new Set(this.customerData.map((item) => item.program))];
    this.optionShift = [...new Set(this.customerData.map((item) => item.shift))];
    this.optionType = [...new Set(this.customerData.map((item) => item.subscriptionType))];
    this.optionCredit = [...new Set(this.customerData.map((item) => item.credit))];
  }
}
