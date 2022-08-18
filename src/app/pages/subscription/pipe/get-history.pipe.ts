import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getHistory'
})
export class GetHistoryPipe implements PipeTransform {

  transform(value: any,from:any,to:any) {
    value=value.filter(item=>{
        if(to){
          if((new Date(from) <=(new Date(item.txd)))&&(new Date(to) >=(new Date(item.txd)))){
          return item;
          }
        }else if((new Date(from) <=(new Date(item.txd)))){
          return item;

        }
      });

    return value;
  }

}
