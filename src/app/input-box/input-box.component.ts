import { Component, OnInit, Input } from '@angular/core';

import {COMSERVICES} from '../mock-service';
import {ComserviceComponent} from '../comservice/comservice.component';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {
  
  @Input() service: Object;
  @Input() newTariff: number;

  calculating = 0.00;
  new_tariff = 0;
  new_metric = 0;
  new_date = '';
  
  calculate(){
    this.calculating = this.new_metric * this.new_tariff;
  }

  constructor() { }

  ngOnInit() {
  }

}
