
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MenuItem } from 'primeng/api';

import { GlobalVar } from '../main-config';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private url = GlobalVar.db_url;        //  url базы данных (без путей)

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) {
  }

  getData(id : number): Observable<any> {
    let x = this.http.get<any>(this.url+"/menu?id="+id);     
    return x;
  }
}