import {Appliance} from './appliance';
import {appliance} from './mock-appliances';
import {Injectable} from '@angular/core';

@Injectable()
export class ApplianceService {
    getAppliances(): Promise<Appliance[]> {
        return Promise.resolve(appliance);
    }

    getAppliance(id: number): Promise<Appliance> {
        return this.getAppliances()
            .then(appliances => appliances.find(appliances => appliances.id === id));
    }
}
