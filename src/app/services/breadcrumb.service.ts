import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { GlobalVar } from '../main-config';
import { Breadcrumb } from '../interfaces/breadcrump';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})

export class BreadcrumbService {
  private url = GlobalVar.db_url;        //  url базы данных (без путей)

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) {
  }

  getData(id : number): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.url+"/breadcrumb/?id="+id);
  }
}
