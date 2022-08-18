import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getCustomer'
})
export class GetCustomerPipe implements PipeTransform {

  transform(value: any, name: any,status:any,program:any,shift:any,type:any,credit:any): any {
    if (name) {
      value = value.filter(item => {
        if (item.fullName.toLowerCase().search(name) > -1) {
          return item;
        }
      });
    }
    if (status) {
      if(status!="Any"){
      value = value.filter(item => {
        const statusCheck = status=="Active"? true:false;
        if (item.status===statusCheck) {
          return item;
        }
      });
    }}
    if (program) {
      if(program!="Any"){
      value = value.filter(item => {
        if (item.program === program) {
          return item;
        }
      });
    }}
    if (shift) {
      if(shift!="Any"){
      value = value.filter(item => {
        if (item.shift === shift) {
          return item;
        }
      });
    }}
    if (type) {
      if(type!="Any"){
      value = value.filter(item => {
        if (item.subscriptionType == type) {
          return item;
        }
      });
    }}

    if (credit) {
      if(credit!="Any"){
      value = value.filter(item => {
        if (item.credit === credit) {
          return item;
        }
      });
    }}
    // console.log(status);
    // console.log(data);
    return value;
  }

}
