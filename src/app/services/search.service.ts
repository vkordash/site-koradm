import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { GlobalVar } from '../main-config';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  private url = GlobalVar.db_url;        //  url базы данных (без путей)

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) {
  }

  pubSearch(pubSearch:any) : Observable<any> {
    return this.http.post<any>(this.url+'/list_search',pubSearch);
  }
  
  pubCntSearch(pubSearch:any) : Observable<any> {
    return this.http.post<any>(this.url+'/list_search/cnt',pubSearch);
  }

  docSearch(docSearch:any): Observable<any> {
    return this.http.post<any>(this.url+'/docs_search', docSearch);      
  }
  
  docCntSearch(docSearch:any):Observable<any>{
    return this.http.post<any>(this.url+'/docs_search/cnt', docSearch);
  }
}
