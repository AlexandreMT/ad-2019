import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected api = environment.api;
  protected headers: HttpHeaders;

  constructor() {
    this.headers = new HttpHeaders()
      .set('Accept', 'application/json');
  }

  setHeader() {
    this.headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-type', 'application/json');
  }

  setHeaderFile() {
    this.headers = new HttpHeaders()
      .set('Accept', 'x-www-form-urlencoded')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  }
}
