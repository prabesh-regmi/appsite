import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  @Input() data: any;
  @Input() handler: Function;
  @Output() newDataEvent = new EventEmitter<any>();
  addNewData(event:any){
    this.newDataEvent.emit(event);
    console.log(this.customerForm);
    this.data.updateData(this.customerForm);
    this.data.close();
  }
  cancle(){
    this.data.close();
  }
  
  constructor() { }

  ngOnInit(): void {
  }
  
  customerForm=
  {
        id: '',
        fullName: '',
        email:'',
        gender:'',
        bloodGroup:'',
        address:'',
        healthStatus:'',
        program: '',
        subscriptionType: '',
        shift: '',
        credit: '',
        startDate:'',
        expireOn: '',
        phoneNumber:'',
        planPrice:'',
        pay:'',
        duePayment:'',
        assignBy:'',
        profileImg:'',
        status:true,
        freeze:null,
        emergencyContact:{
          fullName:'',
          contactNumber:'',
          optContactNumber:'',
          relationship:'',
        }
  };
  getData(event:any){
    console.log(event.target.value);
  }
}
