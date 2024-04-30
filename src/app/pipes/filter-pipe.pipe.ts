import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Array<any>, SearchText:any): any {
  if(SearchText == '' || SearchText == undefined){
    return value
  }
  return value.filter((item:any)=>{
    return item?.title?.toLowerCase().includes(SearchText?.toLowerCase())
  })
  }

}
