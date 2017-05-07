import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { ApplianceDetailComponent }  from './appliance-detail.component';
import { ApplianceComponent }      from './appliance.component';
import { ApplianceService }          from './appliance.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ApplianceDetailComponent,
    ApplianceComponent
  ],
  providers: [ ApplianceService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
