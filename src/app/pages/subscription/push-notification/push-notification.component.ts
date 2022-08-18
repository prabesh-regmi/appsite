import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng-devui';
import { PushNotifyComponent } from './push-notify/push-notify.component';
interface Message {
  message: string;
  date:any
}
@Component({
  selector: 'app-push-notification',
  templateUrl: './push-notification.component.html',
  styleUrls: ['./push-notification.component.scss']
})
export class PushNotificationComponent implements OnInit {
  messages:Message[]=[
    {
      message:'Hyper Super Cober Test',
      date:'2022/6/15'
    },
    {
      message:'Test OK',
      date:'2022/11/16'
    },
    {
      message:'Push Notification',
      date:'2022/4/8'
    },
    {
      message:'FreeHance Marketing',
      date:'2022/9/5'
    },
    
  ];

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
  }
  pager = {
    total: 4,
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
  openDialog(type:any) {
    const results = this.dialogService.open({
      width: '50%',
      maxHeight: '500px',
      title: 'Push Notify',
      content: PushNotifyComponent,
      backdropCloseable: true,
      buttons: [],
      data: {
        // preview: preview,
        customer: 'this.customerData[index]',
        updateData: (value: any) => {
        this.messages=[...this.messages,
        {
          message:value,
          date: new Date(),
        }
        ]

        },
        close: () => {
          results.modalInstance.hide();
        },
      },
    });
  }
}
