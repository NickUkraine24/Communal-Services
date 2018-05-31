import { Pipe, PipeTransform } from '@angular/core';

import {data_types} from '../data_types';
import {MonthPipe} from '../pipe-months.pipe';

@Pipe({
  name: 'yearFilter'
})
export class YearFilterPipe implements PipeTransform {
  transform(items: data_types[] = [], filter: any): any {
    if (!filter.year) return items;
    let arrayFilter: any;
    if (filter.month) {
      arrayFilter = item => item.year === +filter.year && item.month === +filter.month;
    } 
    else {
      arrayFilter = item => item.year === +filter.year;
    }
    return items.filter(arrayFilter);
  }

}
