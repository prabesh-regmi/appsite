import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getPayment'
})
export class GetPaymentPipe implements PipeTransform {

  transform(value: any, name:string,from:any,to:any) {
    if (name) {
      value = value.filter(item => {
        if (item.name.toLowerCase().search(name) > -1) {
          return item;
        }
      });
    }
      value=value.filter(item=>{
        if(to){
          if((new Date(from) <=(new Date(item.paymentHistory[item.paymentHistory.length-1].txd)))&&(new Date(to) >=(new Date(item.paymentHistory[item.paymentHistory.length-1].txd)))){
          return item;
          }
        }else if((new Date(from) <=(new Date(item.paymentHistory[item.paymentHistory.length-1].txd)))){
          return item;

        }
      });

    return value;
  }

}
