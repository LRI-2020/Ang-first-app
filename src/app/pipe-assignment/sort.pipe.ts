import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe<T> implements PipeTransform {

  transform(value:any, direction: boolean, propName: string): any {
    console.log('in transform method - value = ' + JSON.stringify(value))
    if (value.length === 0 || propName === '') {
      return value;
    }

    switch (direction) {
      case true:
        value.sort(this.compareAsc(propName))
        console.log('sorted asc value : ' + JSON.stringify(value))
        break;
      case false:
        value.sort(this.compareDesc(propName))
        console.log('sorted desc value : ' + JSON.stringify(value))
        break;
    }
    return value;
  }

compareAsc(propName:string){

    return function(a:any,b:any){

      if (a[propName] > b[propName])
        return 1
      else if (a[propName] < b[propName])
        return -1
      else
        return 0
    }
}
  compareDesc(propName:string){
    return function(a:any,b:any){
      if (a[propName] > b[propName])
        return -1
      else if (a[propName] < b[propName])
        return 1
      else
        return 0
    }
  }



}
