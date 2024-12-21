import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(this.getToken());
  private apiUrl = 'http://localhost:8080';
  private token: string | null = null;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = {
      username: username,
      password: password,
    };

    return this.http.post(`${this.apiUrl}/api/account/login`, body, {
      observe: 'response',
    });
  }

  deconnection() {
    localStorage.removeItem('access_token');
    this.tokenSubject.next(null);
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  setToken(token: string, username: string): void {
    localStorage.setItem('access_token', token);
    localStorage.setItem('username', username);
    this.tokenSubject.next(token);
  }

  getTokenObservable(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }
}
