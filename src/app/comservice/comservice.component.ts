import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comservice',
  templateUrl: './comservice.component.html',
  styleUrls: ['./comservice.component.css']
})
export class ComserviceComponent implements OnInit {

  @Input() service;

  constructor() { }

  ngOnInit() {
  }

}
