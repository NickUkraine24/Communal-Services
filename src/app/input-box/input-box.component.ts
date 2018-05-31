import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {AddTypes} from '../add-types';
import {ComserviceComponent} from '../comservice/comservice.component';

import {AppService} from '../app.service';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {

  @Input() VarService;
 
  element: AddTypes;
  lastPayment: AddTypes;

  currentTime = new Date();
  year = this.currentTime.getFullYear();
  month = this.currentTime.getMonth() + 1;
  calculating: number;
  calculated: number;

  constructor() { }

  @Output() messageEvent = new EventEmitter<number>();

  ngOnInit() {}
  
  addNewPayment() {
    
    this.element = {
      year: 1, month: 0,
      fixedService: [
        { id: 1, name: 'rent', sum: 53 },
        { id: 2, name: 'heating', sum: 349}
      ],
      varService: [
        { id: 1, name: 'light', previous: 0, current: null, tariff: 2.05, sum: null },
        { id: 2, name: 'water', previous: 0, current: null, tariff: 1.56, sum: null},
        { id: 3, name: 'gas', previous: 0, current: null, tariff: 3.8, sum: null}
      ]
    };
    this.element.varService.forEach((el, i) => {
      el.previous = this.lastPayment.varService[i].current;
    });
  }
  calculate(previous, new_metric, new_tariff){
    this.calculated = (previous - new_metric) * new_tariff;
    this.calculating = Math.round(this.calculated);
    this.VarService.sum = this.calculating;
    this.VarService.current = previous;

    this.messageEvent.emit(this.calculating); 
  }
}
