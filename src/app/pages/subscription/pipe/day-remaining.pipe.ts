import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayRemaining'
})
export class DayRemainingPipe implements PipeTransform {

  transform(value: any,...args:any[]) {
    console.log("value:"+value);
    console.log('args:'+args);
    const today:any =new Date();
    console.log("today:"+today);
    const valueDate:any = new Date(value);
    console.log("valueData:"+valueDate);
    console.log("diff"+(valueDate-today));

    const date:any = Math.floor((valueDate-today)/(1000 * 3600 * 24));
    console.log("date:"+date);
    return date;
  }

}
