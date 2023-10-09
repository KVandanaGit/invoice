import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  apiUrl = "http://localhost:3004/invoice";
  createUrl = "http://localhost:3004/invoice/id";

  constructor(private http: HttpClient) { }

  //Get All Data
  getAllInvoice(): Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }

  //create data
  createData(data:any): Observable<any>{
    console.log(data, 'Data added successully')
    return this.http.post(`${this.createUrl}`, data);
  }
}
