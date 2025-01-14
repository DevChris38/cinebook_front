import { Injectable } from '@angular/core';
import {
  Customer,
  DTOCustomerCreation,
  DTOCustomerUpdate,
} from '../interfaces/customer';
import { RegionEnum } from '../enum/region-enum';
import { JobsEnum } from '../enum/jobs-enum';
import { SexeEnum } from '../enum/sexe-enum';
import { Project } from '../interfaces/project';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserFilterRequestDTO } from '../interfaces/UserFilterRequestDTO';
import { List } from 'postcss/lib/list';

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

  createCustomer(dTOCustomerCreation: DTOCustomerCreation): Observable<any> {
    console.log('customerSevice.createCustomer()');
    return this.http.post(
      environment.apiURL + '/account/register',
      dTOCustomerCreation,
      {
        observe: 'response',
      },
    );
  }

  getFilteredUsers(filter: UserFilterRequestDTO): Observable<Customer[]> {
    console.log(filter);
    return this.http.post<Customer[]>(
      environment.apiURL + '/user/filter',
      filter,
    );
  }
}
