import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getCustomer'
})
export class GetCustomerPipe implements PipeTransform {

  transform(value: any, name: any): any {
    if (name) {
      value = value.filter(item => {
        if (item.fullName.toLowerCase().search(name) > -1) {
          return item;
        }
      });
    }

    // console.log(data);
    return value;
  }

}
