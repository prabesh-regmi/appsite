import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Input() data: any;
  @Input() handler: Function;
  @Output() editDataEvent = new EventEmitter<any>();
  editData(value:any){
    this.editDataEvent.emit(value);
    this.data.updateData(this.customerForm);
    this.data.close();
  }
  close(){
    this.data.close();
  }
  
  constructor() { }

  ngOnInit(): void {
    this.customerForm ={
      ...this.data.customer
    };
    this.preview=this.data.preview;
  }
  preview:boolean;
  customerForm:any;
  imageUpload(event:any){
      console.log("here");
      var reader = new FileReader();

      reader.onload =  () =>{
        this.customerForm.profileImg= reader.result;
          console.log(reader.result);
      }
      
      reader.readAsDataURL(event.target.files[0]);
  
  }
  

}
