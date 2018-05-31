import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-input-box-fix',
  templateUrl: './input-box-fix.component.html',
  styleUrls: ['./input-box-fix.component.css']
})
export class InputBoxFixComponent implements OnInit {

  currentTime = new Date();
  year = this.currentTime.getFullYear();
  month = this.currentTime.getMonth() + 1;
  new_tariff: number;
  calculating: number;

  constructor() { }

  @Input() FixService;
  @Output() messageEvent = new EventEmitter<number>();

  ngOnInit() {
  }

  calculate(){
    this.calculating = this.new_tariff;
    this.FixService.sum = this.calculating;
    this.messageEvent.emit(this.calculating);
  }

}
