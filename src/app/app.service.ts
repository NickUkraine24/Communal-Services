import { Injectable, Input } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import {data_types} from './data_types';
import {fixed_service} from './data_types';
import {var_service} from './data_types';

@Injectable()
export class AppService {

  private paymentUrl = 'api/payment';
  private fixedServiceUrl = 'api/fixed_service';
  private varServiceUrl = 'api/var_service';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ){}

  getPayment(): Observable<data_types[]>{
    return this.http.get<data_types[]>(this.paymentUrl);
  }
  getPaymentById(id: number): Observable<data_types[]>{
    const url = `${this.paymentUrl}/${id}`;
    return this.http.get<data_types[]>(url);
  }
  getPaymentByYear(year: number): Observable<data_types[]>{
    const url = `${this.paymentUrl}/?year=${year}`;
    return this.http.get<data_types[]>(url);
  }
  getPaymentByMonth(month: string): Observable<data_types[]>{
    const url = `${this.paymentUrl}/?month=${month}`;
    return this.http.get<data_types[]>(url);
  }
  getPaymentBySum(sum: number): Observable<data_types[]>{
    const url = `${this.paymentUrl}/?sum=${sum}`;
    return this.http.get<data_types[]>(url);
  }
  
  addPayment (data): Observable<data_types> {
    return this.http.post<data_types>(this.paymentUrl, data, this.httpOptions).pipe();
  }

  addFixService(data: fixed_service): Observable<fixed_service> {
    return this.http.post<fixed_service>(this.fixedServiceUrl, data, this.httpOptions).pipe();
  }
  addVarService(data: var_service): Observable<var_service> {
    return this.http.post<var_service>(this.varServiceUrl, data, this.httpOptions).pipe();
  }
  getVarService(): Observable<var_service[]>{
    return this.http.get<var_service[]>(this.varServiceUrl);
  }
  getFixService(): Observable<fixed_service[]>{
    return this.http.get<fixed_service[]>(this.fixedServiceUrl);
  }
}