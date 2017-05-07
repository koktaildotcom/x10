import { Component, OnInit } from '@angular/core';

import { Appliance } from './appliance';
import { ApplianceService } from './appliance.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  appliances: Appliance[] = [];

  constructor(private Applianceservice: ApplianceService) { }

  ngOnInit(): void {
    this.Applianceservice.getAppliances()
      .then(appliances => this.appliances = appliances.slice(1, 5));
  }
}
