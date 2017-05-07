import { Appliance } from './appliance';
import { appliance } from './mock-appliances';
import { Injectable } from '@angular/core';

@Injectable()
export class ApplianceService {
  getAppliances(): Promise<Appliance[]> {
    return Promise.resolve(appliance);
  }

  getAppliancesSlowly(): Promise<Appliance[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getAppliances()), 0);
    });
  }

  getAppliance(id: number): Promise<Appliance> {
    return this.getAppliances()
               .then(appliances => appliances.find(appliances => appliances.id === id));
  }
}
