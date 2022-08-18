import { Component, OnInit } from '@angular/core';
import { AddNewConfigurationComponent } from './add-new-configuration/add-new-configuration.component';
import { DialogService } from 'ng-devui/modal';


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {


  SubscriptionTypeData=[
    {
      name: '2 Years'
   },
   {
    name: 'Monthly'
 },
 {
  name: 'Quartely'
},
{
  name: '6 Months'
},
{
  name: '1 Year'
},
];
WorkoutShiftData=[
  {
    name: 'Morning'
 },
 {
  name: 'Mid Day'
},
{
name: 'Afternoon'
},
{
name: 'Evening'
},
];

ProgramData=[
  {
    name: 'zumba/Arotics'
 },
 {
  name: 'Cardio'
},
{
name: 'Kick Boxing'
},
{
name: 'Gym'
},
];

pager = {
  total: this.SubscriptionTypeData.length,
  pageIndex: 5,
  pageSize: 5,
  pageSizeOptions: [10, 20, 30, 40, 50]
};
preLink = '<span class="icon-arrow-left"></span>';
nextLink = '<span class="icon-arrow-right"></span>';
pageIndexChange(pageIndex:any) {
  this.checkCount(pageIndex);
}
pageSizeChange(pageSize:any) {
  this.pager.pageIndex = 1;
  this.checkCount(this.pager.pageIndex);
}

pageIndexChangeWithoutFix(pageIndex:any) {
  this.checkCount(pageIndex);
}
pageSizeChangeWithoutFix(pageSize:any) {
  this.pager.pageIndex = 1;
  this.checkCount(this.pager.pageIndex);
}
checkCount(pageIndex:any) {
  console.log('check number of the function calls and show current pageIndex', pageIndex);
}
constructor(private dialogService: DialogService) {}
ngOnInit(): void {
  }

  openDialog(type:any) {
    const results = this.dialogService.open({
      width: '300px',
      maxHeight: '500px',
      title: 'New Item',
      content: AddNewConfigurationComponent,
      backdropCloseable: true,
      buttons: [],
      data: {
        // preview: preview,
        customer: 'this.customerData[index]',
        updateData: (value: any) => {
          // this.customerData[index] = value;
          type==='sub'&& (this.SubscriptionTypeData=[...this.SubscriptionTypeData,{name:value}]);
          type==='shift'&& (this.WorkoutShiftData=[...this.WorkoutShiftData,{name:value}]);
          type==='program'&& (this.ProgramData=[...this.ProgramData,{name:value}]);

        },
        close: () => {
          results.modalInstance.hide();
        },
      },
    });
  }
  

}
