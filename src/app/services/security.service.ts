import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  constructor(private http: HttpClient) {
    this.http = http;
  }

  login() {
    return this.http.get('api/login');
  }
}
