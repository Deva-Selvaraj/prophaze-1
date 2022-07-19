import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const domain = 'http://localhost:7878';
const createBookEndpoint = domain + '/book/add';

@Injectable({
  providedIn: 'root'
})

export class BookServiceService {

  constructor(private http: HttpClient) { }

  createBook(payload: any): Observable<any> {
    return this.http.post<any>(createBookEndpoint, payload);
  }
}
