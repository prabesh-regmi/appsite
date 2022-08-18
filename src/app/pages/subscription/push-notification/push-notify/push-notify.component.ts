import { Component, OnInit,Input } from '@angular/core';
import { CustomerDataList } from '../../customerDataList';

@Component({
  selector: 'app-push-notify',
  templateUrl: './push-notify.component.html',
  styleUrls: ['./push-notify.component.scss']
})
export class PushNotifyComponent implements OnInit {
  @Input() data: any;
  @Input() handler: Function;
  message:any='';
  customerData;
  values=["ALL"]

  searchProgram: string = null;
  searchShift: string = null;
  searchType: string = null;
  
  optionProgram: any=[] ;
  optionShift: any=[] ;
  optionType: any=[] ;
  constructor() { }

  ngOnInit(): void {
    this.customerData = CustomerDataList;
    this.optionProgram = [...this.optionProgram, ...new Set(this.customerData.map((item) => item.program))];
    this.optionShift = [...this.optionShift,...new Set(this.customerData.map((item) => item.shift))];
    this.optionType = [...this.optionType,...new Set(this.customerData.map((item) => item.subscriptionType))];
  }

  addNewData(){
    this.data.updateData(this.message);
    this.data.close();
  }
  cancel(){
    this.data.close();
  }

  close($event) {
    this.handler($event);
  }


}
