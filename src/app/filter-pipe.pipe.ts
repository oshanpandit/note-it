import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
  pure:false
})
export class FilterPipePipe implements PipeTransform {

  transform(value:any,type:string){

    if(type=='' || type==' '){
      return value;
    }

    const resultArray=[];

     for(let item of value){
         if(item.content==type || item.title==type){
            resultArray.push(item);
         }
     }
     return resultArray;
  }

}
