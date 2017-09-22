import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent}   from './dashboard.component';
import {ApplianceComponent}      from './appliance.component';
import {ApplianceDetailComponent}  from './appliance-detail.component';
import {ApplianceListComponent}  from './appliance-list.component';

//{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },

const routes:Routes = [
    {path: '', component: ApplianceListComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'detail/:id', component: ApplianceDetailComponent},
    {path: 'appliances', component: ApplianceComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
