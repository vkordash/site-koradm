import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { GlobalVar } from '../main-config';

@Injectable({
  providedIn: 'root'
})

export class BannerService {
  private url = GlobalVar.db_url;        //  url базы данных (без путей)

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) {
  }

  getBanner(id : number): Observable<string> {
    return this.http.get<string>(this.url+"/banners?id_menu="+id);
  }

}
