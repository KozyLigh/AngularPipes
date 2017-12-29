import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // this forces the pipe to be execute everytime something changes ...
  // THIS IS NOT GOOD it has an effect of performance! Filters should/can be done differently
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {

      if (item[propName] === filterString) {
        resultArray.push(item);
      }

    }
    return resultArray;
  }

}
