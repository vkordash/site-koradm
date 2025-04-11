import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { GlobalVar } from '../main-config';

@Injectable({
  providedIn: 'root'
})
export class VirtReceptionService {

  private url = GlobalVar.db_url;        //  url базы данных (без путей)

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) {
  }

  add(data:any) : Observable<any> {
    return this.http.post<any>(this.url+'/virt_reception/add',data);
  }
}