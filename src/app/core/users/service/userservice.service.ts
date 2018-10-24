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
export class UserService {

  constructor(
    private httpclient: HttpClient,
    private router: Router
  ) { }

  getListUsers(): Observable<User[]> {
    return this.httpclient.get<User[]>(urlUser);
  }

  canActivate(): boolean {
    return true;
  }

  putUser(user: User) {
    const url = `${urlUser}/${user.id}`;
    this.httpclient.put(url,
      user)
      .subscribe(
        data => {
          console.log("PUT Request is successful ", data);
        },
        error => {
          console.log("Rrror", error);
        }
      );
  }


  postUser(user: User) {
    this.httpclient.post(urlUser,
      user)
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
        },
        error => {
          console.log("Rrror", error);
        }
      );
  }

  deleteUser(id: number): void {
    const url = `${urlUser}/${id}`;
    this.httpclient.delete(url)
      .subscribe(error => {
                            console.log("Rrror", error);
                          }
      );
  }

}
