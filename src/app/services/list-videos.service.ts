import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { GlobalVar } from '../main-config';


@Injectable({
  providedIn: 'root'
})
export class ListVideosService {
  private url = GlobalVar.serv_site;        //  url базы данных (без путей)

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) {
  }

  getData(id : number, offset : number, limit : number ): Observable<any> {    
    let x = this.http.get<any>(this.url+"/video/list?id="+id+"&offset="+offset+"&limit="+limit);
    return x;
  }

  getCnt(id : number): Observable<any> {    
    let x = this.http.get<any>(this.url+"/video/cnt?id="+id);
    return x;
  }

  getLast(id : number, limit : number,): Observable<any> {    
    let x = this.http.get<any>(this.url+"/video/last?id="+id+"&limit="+limit);
    return x;
  }
}

https://serv-site.menarada.gov.ua/video/list?id=8&limit=0&offset=3
https://serv-site.menarada.gov.ua/video/list?id=8&limit=8&offset=0