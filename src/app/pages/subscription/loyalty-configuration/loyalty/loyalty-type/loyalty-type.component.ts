import { Component, OnInit } from '@angular/core';
import {LoyaltyTypeData} from './loyaltyTypeData'


interface Loyality {
  id:string;
  customer: string;
  color: string;
}
@Component({
  selector: 'app-loyalty-type',
  templateUrl: './loyalty-type.component.html',
  styleUrls: ['./loyalty-type.component.scss']
})
export class LoyaltyTypeComponent implements OnInit {

  editColor: { [key: string]: { edit: boolean; data: Loyality } } = {};
  loyaltyTypeData: Loyality[]= [];



  constructor() { }


  check() {
    
console.log("worded")
  }

  startEdit(id: string): void {
    this.editColor[id].edit = true;
  }

  cancelEdit(id: string): void {
    const index = this.loyaltyTypeData.findIndex(item => item.id === id);
    this.editColor[id] = {
      data: { ...this.loyaltyTypeData[index] },
      edit: false
    };
  }

  saveEdit(id: string): void {
    const index = this.loyaltyTypeData.findIndex(item => item.id === id);
    Object.assign(this.loyaltyTypeData[index], this.editColor[id].data);
    this.editColor[id].edit = false;
  }

  updateEditMessage(): void {
    this.loyaltyTypeData.forEach(item => {
      this.editColor[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  ngOnInit(): void {
    this.loyaltyTypeData = LoyaltyTypeData;
    this.updateEditMessage();
  }

}
