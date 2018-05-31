import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css']
})
export class InputDateComponent implements OnInit {

  currentTime = new Date();
  year = this.currentTime.getFullYear();
  month = this.currentTime.getMonth() + 1;
  inputMonth = this.month;
  
  @Output() changeMonth = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }

  monthListener() {
    this.changeMonth.emit(this.inputMonth);
  }

}
