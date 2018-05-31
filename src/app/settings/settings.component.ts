import { Component, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { AppService } from '../app.service';

import {data_types} from '../data_types';
import {fixed_service} from '../data_types';
import {var_service} from '../data_types';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  modalRef: BsModalRef;

  fixedPayment: fixed_service[] = [];
  varPayment: var_service[] = [];

  constructor(
    private modalService: BsModalService,
    private appService: AppService
  ){}

  ngOnInit() {
    this.getServices();
  }

  alert(template){
    this.modalRef = this.modalService.show(template);
  }
  addNewPayment(nameService: string, metric: number, fixed: boolean): void{
    if(fixed === true){
      this.addFixPayment(nameService);
    } 
    else{
      this.addVarPayment(nameService, metric);
    }
  }
  addFixPayment(name){
    name == name.trim();
    if(!name){
      return;
    }    
    this.appService.addFixService({ name, sum: 0 } as fixed_service)
    .subscribe(Fixed_service => { 
      this.fixedPayment.push(Fixed_service);
      this.modalRef.hide();
    })
  }
  addVarPayment(name, tariff){
    name == name.trim()
    if(!name){
      return;
    }
    this.appService.addVarService({name, tariff, previous: 0, current: 0, sum: 0} as var_service)
    .subscribe(Var_service => {
      this.varPayment.push(Var_service);
      this.modalRef.hide();
    })
  }
  getServices(){
    this.getFixService();
    this.getVarService();
  }
  getFixService() {
    this.appService.getFixService()
    .subscribe(fixed_service => {
      this.fixedPayment = fixed_service;
    })
  }
  getVarService() {
    this.appService.getVarService()
    .subscribe(var_service => {
      this.varPayment = var_service;
    })
  }
}
