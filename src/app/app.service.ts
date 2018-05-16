import { Injectable, Input } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';

// import {InputBoxComponent} from './input-box/input-box.component';
import {data_types} from './data_types';

// import {COMSERVICES} from './mock-service';

@Injectable()
export class AppService {
  private paymentUrl = 'api/payment';

  constructor(private http: HttpClient){}

  getPayment(): Observable<data_types[]>{
    const url = `${this.paymentUrl}`;
    return this.http.get<data_types[]>(url);
  }
  
  // @Input() calculating = 0.00;
  // @Input() new_tariff;
  // @Input() new_metric;

  // calculate(){
  //   this.calculating = this.new_metric * this.new_tariff;
  //   return this.calculating;
  // }

  // service = COMSERVICES;

  // getComservice(){
  //     this.service = this.
  // }
}
