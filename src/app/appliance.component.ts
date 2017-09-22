import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Appliance } from './appliance';
import { ApplianceService } from './appliance.service';

@Component({
  selector: 'my-appliances',
  templateUrl: './appliance.component.html',
  styleUrls: [ './appliance.component.css' ]
})
export class ApplianceComponent implements OnInit {
  appliances: Appliance[];
  selectedAppliance: Appliance;

  constructor(
    private router: Router,
    private ApplianceService: ApplianceService) { }

  getAppliances(): void {
    this.ApplianceService.getAppliances().then(appliances => this.appliances = appliances);
  }

  ngOnInit(): void {
    this.getAppliances();
  }

  onSelect(appliances: Appliance): void {
    this.selectedAppliance = appliances;
  }

  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedAppliance.id]);
  }
}
