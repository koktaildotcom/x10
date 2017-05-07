import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { ApplianceComponent }      from './appliance.component';
import { ApplianceDetailComponent }  from './appliance-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/appliances', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: ApplianceDetailComponent },
  { path: 'appliances',     component: ApplianceComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
