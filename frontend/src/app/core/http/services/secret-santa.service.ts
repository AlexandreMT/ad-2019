import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BaseService} from "./base.service";

@Injectable({
  providedIn: 'root'
})
export class SecretSantaService extends BaseService{
  constructor(
    private http: HttpClient
  ) { super(); }

  listFriends(): Observable<any> {
    this.setHeader();
    return this.http.get(`${this.api}/users`, { headers: this.headers });
  }

  postFriend(friend: { name, email }): Observable<any> {
    this.setHeader();
    return this.http.post(`${this.api}/users`, friend, { headers: this.headers });
  }

  putFriend(friend: { _id?, name, email }): Observable<any> {
    this.setHeader();
    return this.http.put(`${this.api}/users/${friend._id}`, friend, { headers: this.headers });
  }

  deleteFriend(_id: string): Observable<any> {
    this.setHeader();
    return this.http.delete(`${this.api}/users/${_id}`, { headers: this.headers });
  }

  raffle(): Observable<any> {
    this.setHeader();
    return this.http.post(`${this.api}/users/raffle`, {}, { headers: this.headers });
  }
}
