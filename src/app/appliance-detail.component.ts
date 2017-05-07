import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Appliance }         from './appliance';
import { ApplianceService }  from './appliance.service';

@Component({
  selector: 'appliance-detail',
  templateUrl: './appliance-detail.component.html',
  styleUrls: [ './appliance-detail.component.css' ]
})
export class ApplianceDetailComponent implements OnInit {
  appliance: Appliance;

  constructor(
    private applianceService: ApplianceService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.applianceService.getAppliance(+params['id']))
      .subscribe(appliance => this.appliance = appliance);
  }

  goBack(): void {
    this.location.back();
  }
}
