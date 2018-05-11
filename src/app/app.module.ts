import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { ComserviceComponent } from './comservice/comservice.component';
import { AppComponent } from './app.component';
import { PaymentsComponent } from './payments/payments.component';
import { SettingsComponent } from './settings/settings.component';

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
    ComserviceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
