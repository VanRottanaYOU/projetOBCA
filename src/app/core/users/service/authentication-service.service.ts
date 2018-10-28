import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, delay, catchError, finalize, tap } from "rxjs/operators";
import { User } from '../model/usermodel';
import { Router } from '@angular/router';

const urlUser = "http://127.0.0.1:3000/user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: User;
  

  constructor(
    private httpClient: HttpClient,
  ) { }

  login(email: string, password: string): Observable<User> {
    let params = new HttpParams().set('email', email).set('password', password);
    return this.httpClient.get<User>(`${urlUser}`, { params })
      .pipe(map(user => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }

        return user;
      }));
  }

  canActivate(): boolean{
    return true;
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('user');
    return token != null;
  }

}
