import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { GlobalVar } from '../main-config';


@Injectable({
  providedIn: 'root'
})
export class ListAnonsService {

  private url = GlobalVar.serv_site;        //  url базы данных (без путей)

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) {
  }

  getData(id : number, limit : number, offset : number): Observable<any> {    
    let x = this.http.get<any>(this.url+"/page/list?id="+id+"&limit="+limit+"&offset="+offset);
    return x;
  }

  getCnt(id : number): Observable<any> {    
    let x = this.http.get<any>(this.url+"/listanons/cnt?id="+id);
    return x;
  }

  getLast(id : number, limit : number,): Observable<any> {    
    let x = this.http.get<any>(this.url+"/page/list?id="+id+"&limit="+limit+"&offset=0");
    return x;
  }

}
