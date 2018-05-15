import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ComserviceComponent } from './comservice/comservice.component';
import { AppComponent } from './app.component';
import { PaymentsComponent } from './payments/payments.component';
import { SettingsComponent } from './settings/settings.component';
import { ControlPayComponent } from './control-pay/control-pay.component';
import { InputBoxComponent } from './input-box/input-box.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';


const routes = [
  {path: '', component: SettingsComponent},
  {path: 'comservice', component: ComserviceComponent},
  {path: 'payments', component: PaymentsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PaymentsComponent,
    SettingsComponent,
    ComserviceComponent,
    ControlPayComponent,
    InputBoxComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
