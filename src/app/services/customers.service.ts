import { Injectable } from '@angular/core';
import { Customer, DTOCustomerUpdate } from '../interfaces/customer';
import { RegionEnum } from '../enum/region-enum';
import { JobsEnum } from '../enum/jobs-enum';
import { SexeEnum } from '../enum/sexe-enum';
import { Project } from '../interfaces/project';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  constructor(private http: HttpClient) {}

  updateCustomer(dTOCustomerUpdate: DTOCustomerUpdate): Observable<any> {
    console.log('toto');
    return this.http.post(
      environment.apiURL + '/user/update',
      dTOCustomerUpdate,
      {
        observe: 'response',
      },
    );
  }
}
