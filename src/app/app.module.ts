import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent}         from './app.component';
import {DashboardComponent}   from './dashboard.component';
import {ApplianceDetailComponent}  from './appliance-detail.component';
import {ApplianceListComponent}  from './appliance-list.component';
import {ApplianceComponent}      from './appliance.component';
import {ApplianceService}          from './appliance.service';

import {AppRoutingModule}     from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        ApplianceDetailComponent,
        ApplianceListComponent,
        ApplianceComponent
    ],
    providers: [ApplianceService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
