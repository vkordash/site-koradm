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

  getTemplate(name:string=''){
    const params = [
      {
        'main':{
          'menu':{
            component:'menu',
            id:26617,
            pref:'',
            cols:1,
            class:'',
            activ:1
          },
          'banner_ru':{
            component:'banner',
            id:21,
            pref:'ru',
            cols:1,
            class:'',
            activ:1          
          },
          'banner_rd':{
            component:'banner',
            id:23,
            pref:'rd',
            cols:1,
            class:'',
            activ:1
          },
          'carousel':{
            component:'carousel',
            id:35320,
            cnt:0,
            cols:2,
            pref:'',
            class:'',
            activ:1
          },
          'main_news': {
            component:'main_news',
            id:26264,
            cnt:6,
            cosl:2,
            pref:'',
            class:'',
            activ:1
          },
          'main-galleria':{
            component:'main-galleria',
            id:27071,
            cnt:10,
            cols:0,
            pref:'',
            class:'',
            activ:1
          },
          'main_videos':{
            component:'main-videos',
            id:8,
            cnt:0,
            pref:'',
            cols:0,
            activ:1
          },
          'last-anons':{
            component:'last-anons',
            id:26264,
            cnt:6,
            cosl:2,
            pref:'',
            class:'',
            activ:1
          },
          'last-docs':{
            component:'last-docs',
            id:26264,
            cnt:6,
            cosl:2,
            pref:'',
            class:'',
            activ:1
          }
        }
      }
    ];    
    return  params[0]['main'];    
  }
}


/*

  public banner_left_up = 20;
  public banner_right_up = 21;
  public banner_left_down = 22;
  public banner_right_down = 23;
  public menu_top = 1;
  public top_slider = this.config.slider_top;
  public menu_left = 2;
  public menu_right = 3;
  public menu_mega = 5;
  public anons_id = 7;
  public videos_id = 8;

  public id_last_docs=40958;
  public rows_last_docs = 6;
  
  public id_last_anons=7;
  public rows_last_anons = 6;
  
  public id_last_news=0;
  public rows_last_news = 3;

  public id_last_photo=0;
  public rows_last_photo = 1;
  public id_main_photogallery = 0;
  public id_main_video = 0;
  public id_slider_banners = 0;
  public id_main_docs = 0;
  public id_main_photos = 27071;

*/