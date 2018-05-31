import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';

import { data_types } from '../data_types';

import { AppService } from '../app.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-comservice',
  templateUrl: './comservice.component.html',
  styleUrls: ['./comservice.component.css'],
})

export class ComserviceComponent implements OnInit {
  lastPayment: data_types;
  previousPayment: data_types;
  payments: data_types[];

  modalRef: BsModalRef;
  modalRe: BsModalRef;

  sum: number = 0;

  constructor(
    private appService: AppService,
    private modalService: BsModalService
  ){}

  ngOnInit() {
    this.initPayment();
  }

  initPayment(){
    this.sum = 0;
    this.lastPayment = <data_types>{};
    this.lastPayment.month = new Date().getMonth() + 1;
    this.lastPayment.year = new Date().getFullYear();
    this.getPayments();
  }
  getServices(){
    this.getFixService();
    this.getVarService();
  }
  getFixService() {
    this.appService.getFixService()
    .subscribe(fixed_service => {
      this.lastPayment.fixedService = fixed_service;
    })
  }
  getVarService() {
    this.appService.getVarService()
    .subscribe(var_service => {
      this.lastPayment.varService = var_service;
      this.lastPayment.varService.forEach(service => {
        const previousService = this.previousPayment && this.previousPayment.varService.filter(ser => ser.id === service.id)[0];
        if(previousService) {
          service.previous = previousService.current;
        }
      });
    })
  }
  getPayments(): void {
    this.appService.getPayment().subscribe(payments => {
      this.payments = payments;
      this.previousPayment = this.payments[this.payments.length - 1];
      this.getServices();
    });
  }
  receiveMessage($event){
    this.sum = 0;
    [...this.lastPayment.fixedService, ...this.lastPayment.varService].forEach(service => this.sum += service.sum);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  alert_mess(alert: TemplateRef<any>){
    this.modalRe =this.modalService.show(alert);
  }
  save() {
    this.appService.addPayment(this.lastPayment).subscribe(() => {
      this.initPayment();
    });  
  }
  changeMonth(month) {
    this.lastPayment.month = +month;
  }
}