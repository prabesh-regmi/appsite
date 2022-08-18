import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-add-new-configuration',
  templateUrl: './add-new-configuration.component.html',
  styleUrls: ['./add-new-configuration.component.scss']
})
export class AddNewConfigurationComponent implements OnInit {
  @Input() data: any;
  @Input() handler: Function;
  name:any='';

  addNewData(){
    this.data.updateData(this.name);
    this.data.close();
  }
  cancel(){
    this.data.close();
  }

  close($event) {
    this.handler($event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
