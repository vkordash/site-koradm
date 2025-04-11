import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


import { GlobalVar } from '../main-config';

@Injectable({
  providedIn: 'root'
})

export class HeaderService {
  private url = GlobalVar.db_url;        //  url базы данных (без путей)

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) {
  }

  getData(id : string): Observable<number> {
    return this.http.get<any>(this.url+"/header?name="+id);
  }

}
