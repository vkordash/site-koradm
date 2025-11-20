import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


import { GlobalVar } from '../main-config';

@Injectable({
  providedIn: 'root'
})

export class PreferService {
  private url = GlobalVar.serv_site;    
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) {  }

  getData(): Observable<any>{
    return this.http.get<any>(this.url+"/prefer");
  }

}
