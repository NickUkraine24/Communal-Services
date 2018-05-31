import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { ComserviceComponent } from './comservice/comservice.component';
import { AppComponent } from './app.component';
import { PaymentsComponent } from './payments/payments.component';
import { SettingsComponent } from './settings/settings.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { YearFilterPipe } from './year-filter/year-filter.pipe';

import {AppService} from './app.service';
import { InMemoryDataService } from './in-memory-data.service';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { SetFilterPipe } from './set-filter/set-filter.pipe';
import { MonthPipe } from './pipe-months.pipe';
import { MonthFilterPipe } from './month-filter.pipe';
import { InputBoxFixComponent } from './input-box-fix/input-box-fix.component';
import { InputDateComponent } from './input-date/input-date.component';

const routes = [
  {path: '', component: ComserviceComponent},
  {path: 'history', component: PaymentsComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PaymentsComponent,
    SettingsComponent,
    ComserviceComponent,
    InputBoxComponent,
    YearFilterPipe,
    SetFilterPipe,
    MonthPipe,
    MonthFilterPipe,
    InputBoxFixComponent,
    InputDateComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
