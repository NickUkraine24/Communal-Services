import { Pipe, PipeTransform } from '@angular/core';

import { data_types } from '../data_types';

@Pipe({
  name: 'setFilter'
})
export class SetFilterPipe implements PipeTransform {

  transform(items: data_types[] = [], filter: any): any {
    let sort = items.sort((a, b) => b.year - a.year);
    sort = sort.filter((pay, i) => sort.length === i+1 || pay.year !== sort[i+1].year);
    return sort;
  }

}
