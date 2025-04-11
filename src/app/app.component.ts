import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GlobalVar } from './main-config';
import { LocalService } from './services/local.service';
import { Location } from '@angular/common';

import { PreferService } from 'src/app/services/prefer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'koradm';
 
  public banner_left_up = 20;
  public banner_right_up = 21;
  public banner_left_down = 22;
  public banner_right_down = 23;
  public menu_top = 1;
  public top_slider = 29932;
  public menu_left = 2;
  public menu_right = 3;
  public menu_mega = 5;
  public anons_id = 7;
  public videos_id = 8;

  public id_last_docs=0;
  public rows_last_docs = 5;
  
  public id_last_anons=7;
  public rows_last_anons = 5;
  
  public id_last_news=4864;
  public rows_last_news = 5;

  public id_last_photo=0;
  public rows_last_photo = 1;
  public id_photogallery = 0;
  public id_video = 0;
  public id_slider_banners = 0;

  public org_name = 'КОРЮКІВСЬКА РАЙОННА ДЕРЖАВНА АДМІНІСТРАЦІЯ';

  id_site   = GlobalVar.id_site;  
  cols      : number = 1;  // кол-во колонок
  width_lc  : string = 'w-4'; // ширина левой колонки 
  width_mc  : string = 'w-8'; // ширина средней колонки  
  templateScreen: number = 1;
  isLoggedIn: boolean = true;
  

  constructor(private PreferService: PreferService, private LocalService: LocalService, private router: Router,  public sanitizer: DomSanitizer){}

  ngOnInit(): void {
    
    let w = window.innerWidth;
    this.templateScreen = this.getTemplateScreen(w);
    this.set_template(); 
    this.LocalService.clearData();
    this.getData();   
  }


  getData(){
    let s = this.PreferService.getData()
        .subscribe(data => {
       // console.log(data);
        this.org_name=data.org_name;
        this.top_slider = data.id_main_slider;
        this.id_last_news = data.id_main_news;
        this.id_photogallery = data.id_main_photogallery;
        this.id_video = data.id_main_video;
        this.id_slider_banners = data.id_slider_banners;    
        s.unsubscribe(); 
    });
  }

  getPromoStyles() {
      return {
        background: '#000',
        border: '1px solid #dcdcdc'
      };
  }
  onResize(event:any) {
    let w=event.target.outerWidth; 
    this.templateScreen = this.getTemplateScreen(w);
    this.set_template();
  }

  getTemplateScreen(w:number){
    return 1;
    /*if (w>1024) return 2;    
    else return 1;*/
  }

  set_template(){
    //this.siteService.getCols().subscribe(data=> {     
      var data =2;
      if (this.templateScreen==2) {
        if (data==2) {
          this.width_lc='w-4';
          this.width_mc='w-8';          
        }          
        else // 1  
        {
          this.width_lc='';
          this.width_mc='w-12';          
        }       
      }

      if (this.templateScreen==1) {
        if (data==2) {
          this.width_lc='w-12';
          this.width_mc='w-12';
          
        }          
        else // 1  
        {
          this.width_lc='';
          this.width_mc='w-12';          
        }       
      }

      this.cols=data;            
   // }) 
  }
}



