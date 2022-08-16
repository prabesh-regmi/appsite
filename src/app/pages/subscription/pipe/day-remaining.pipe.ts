import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayRemaining'
})
export class DayRemainingPipe implements PipeTransform {

  transform(value: any,...args:any[]) {
    const today:any =new Date();
    const valueDate:any = new Date(value);
    const date:any = Math.floor((valueDate-today)/(1000 * 3600 * 24));
    return date+2;
  }

}
