import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { GlobalVar } from '../main-config';

@Injectable({
  providedIn: 'root'
})

export class ListPhotosService {
  private url = GlobalVar.db_url_nest;        //  url базы данных (без путей)

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) {
  }

  getData(id : number, limit : number, offset : number): Observable<any> {    
    let x = this.http.get<any>(this.url+"/photo/list?id="+id+"&limit="+limit+"&offset="+offset);
    return x;
  }

  getCnt(id : number): Observable<any> {    
    let x = this.http.get<any>(this.url+"/photo/cnt?id="+id);
    return x;
  }

  getListAll(limit : number, offset : number): Observable<any> {    
    let x = this.http.get<any>(this.url+"/photo/list-all?limit="+limit+"&offset="+offset);
    return x;
  }

  getCntAll(): Observable<any> {    
    let x = this.http.get<any>(this.url+"/photo/cnt-all");
    return x;
  }

  getLast(id : number, limit : number,): Observable<any> {    
    let x = this.http.get<any>(this.url+"/photo/last?id="+id+"&limit="+limit);
    return x;
  }
}


