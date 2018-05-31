import { Pipe, PipeTransform } from '@angular/core';

import {data_types} from './data_types';

@Pipe({
  name: 'monthFilter'
})
export class MonthFilterPipe implements PipeTransform {


  transform(items: data_types[] = [], filter: any): any {
    let arrayFilter: any;
    if (filter.month) {
      arrayFilter = item => item.month === +filter.month;
    }
    return items.filter(arrayFilter);
  }

}

