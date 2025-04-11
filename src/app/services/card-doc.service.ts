import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { GlobalVar } from '../main-config';

@Injectable({
  providedIn: 'root'
})

export class CardDocService {
  private url = GlobalVar.db_url;        //  url базы данных (без путей)

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) {
  }

  getPage(id : number): Observable<any> {
    return this.http.get<any>(this.url+"/card?id="+id);
  }
 
  getDoc(id : number): Observable<any> {
    return this.http.get<any>(this.url+"/card/doc?id="+id);
  }
}
