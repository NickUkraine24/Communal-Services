import { Component, OnInit, Input, Output } from '@angular/core';

// import {COMSERVICES} from '../mock-service';
import {ComserviceComponent} from '../comservice/comservice.component';
import {AppService} from '../app.service';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {
  
  @Input() service: Object;

  calculating = 0.00;
  new_tariff: number;
  new_metric: number;

  // new_date = '';
  // calculating = 0.00;
  // new_tariff;
  // new_metric;

  calculate(){
    this.calculating = this.new_metric * this.new_tariff;
    return this.calculating;
  }

  constructor() { }

  ngOnInit() {
  }

}
