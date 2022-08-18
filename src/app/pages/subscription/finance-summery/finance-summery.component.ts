import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng-devui';
import { SingleFinanceSummeryComponent } from './single-finance-summery/single-finance-summery.component';

@Component({
  selector: 'app-finance-summery',
  templateUrl: './finance-summery.component.html',
  styleUrls: ['./finance-summery.component.scss']
})
export class FinanceSummeryComponent implements OnInit {
  from=null;
  to=null;
  searchName='';
  memberData=[
    {
      id:'1',
      name:"Manish Giri",
      paymentHistory:[
        {
          txd:'2020/3/16',
          totalAmount:25435,
          paidAmount:3423,
          balance:5984,
          assignBy:'Ram Bdr. Tamang'
        },
        {
          txd:'2021/3/16',
          totalAmount:25435,
          paidAmount:3423,
          balance:5984,
          assignBy:'Ram Bdr. Tamang'
        },
        {
          txd:'2022/3/16',
          totalAmount:25435,
          paidAmount:3423,
          balance:5984,
          assignBy:'Ram Bdr. Tamang'
        },
        {
          txd:'2022/8/16',
          totalAmount:25435,
          paidAmount:3423,
          balance:5984,
          assignBy:'Ram Bdr. Tamang'
        }
      ],

    },
    {
      id:'2',
      name:"Sujal Tamang",
      paymentHistory:[
        {
          txd:'2020/3/16',
          totalAmount:25435,
          paidAmount:3423,
          balance:5984,
          assignBy:'Ram Bdr. Tamang'
        }
      ],

    },
    {
      id:'3',
      name:"Sujal Tamang",
      paymentHistory:[
        {
          txd:'2020/3/16',
          totalAmount:25435,
          paidAmount:3423,
          balance:5984,
          assignBy:'Ram Bdr. Tamang'
        }
      ],

    },
    {
      id:'4',
      name:"Sujal Tamang",
      paymentHistory:[
        {
          txd:'2020/3/16',
          totalAmount:25435,
          paidAmount:3423,
          balance:5984,
          assignBy:'Ram Bdr. Tamang'
        }
      ],

    },
  ]

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
  }

  openSummeryDialog(id:any) {
    const results = this.dialogService.open({
      width: '60%',
      maxHeight: '500px',
      title: 'Add New Customer',
      content: SingleFinanceSummeryComponent,
      backdropCloseable: true,
      buttons: [],
      data: {
        data:this.memberData.find(item=>item.id==id).paymentHistory,
        updateData: (value: any) => {
          this.memberData.push(value);
        },
        close: () => {
          console.log('tag created');
          results.modalInstance.hide();
        },
      },
    });
  }

}
