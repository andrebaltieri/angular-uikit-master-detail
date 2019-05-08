import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public get() {
    return this.http.get('http://localhost:3000/v1/orders');
  }

  public details(id) {
    return this.http.get('http://localhost:3000/v1/orders/' + id);
  }
}
