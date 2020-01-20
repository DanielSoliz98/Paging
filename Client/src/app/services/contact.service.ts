import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import PageList from './page-list';

const apiUrl = "https://localhost:44343/contacts";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContacts(pageNumber: number = 1, pageSize: number = 5): Observable<PageList> {
    return this.http.get<PageList>(`${apiUrl}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

}
