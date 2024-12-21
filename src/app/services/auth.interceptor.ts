import {
  HttpEvent,
  HttpHandlerFn,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  const token = localStorage.getItem('access_token');

  if (!token) {
    console.log("il n'y a pas de token");
    return next(req);
  }

  console.log('token : ' + token);

  const headers = new HttpHeaders({
    Authorization: 'Bearer ' + token,
  });

  const newReq = req.clone({
    headers,
  });

  return next(newReq);
}
