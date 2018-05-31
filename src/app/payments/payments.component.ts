import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {InputBoxComponent} from '../input-box/input-box.component';
import {AppService} from '../app.service';
import {data_types} from '../data_types';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
})
export class PaymentsComponent implements OnInit {

  payment: data_types[];

  selectedYear: number;
  selectedMonth: string;
  years = [];
  month = [];
  sum: number;
  
  constructor(private appService: AppService){}

  ngOnInit() {   
    this.getTemplatePayment();
  }

  paymentMethodMonth() {
    this.payment.forEach(set => {
      if(!this.month.length) {
        this.month.push(set.month);
      } 
      else {
        if(this.month.indexOf(set.month) === -1) {
          this.month.push(set.month);
        }
      }
    });
  }

  paymentMethod() {
    this.payment.forEach(set => {
      if(!this.years.length) {
        this.years.push(set.year);
      } 
      else {
        if(this.years.indexOf(set.year) === -1) {
          this.years.push(set.year);
        }
      }
    });
  }
  
  getTemplatePayment(){
    this.appService.getPayment().subscribe(data => {
      this.payment = data;
      this.paymentMethod();
    })
  }
  getTemplateYear(year:number){
    this.selectedMonth = '';
  }
}
