import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {InputBoxComponent} from '../input-box/input-box.component';
import {AppService} from '../app.service';
import {data_types} from '../data_types';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
  providers: [AppService]
})
export class PaymentsComponent implements OnInit {
  payment: data_types[];
  
  constructor(private appService: AppService,
    private route: ActivatedRoute) {
    route.params.subscribe((param) => {
        this.getTamplatePayment(param);
    });
  }

  ngOnInit() {
    this.appService.getPayment().subscribe();
  }

  getTamplatePayment(param){
    this.appService.getPayment().subscribe(data => this.payment = data);
  console.log(this);
  }
  
}
