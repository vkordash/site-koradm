import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GlobalVar } from '../../main-config';
import { LocalService } from '../../services/local.service';
import { Location } from '@angular/common';
import { AppConfigService } from '../../services/app-config.service';

import { PreferService } from 'src/app/services/prefer.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

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

  public user_template = 0;
  
  constructor(private PreferService: PreferService, private LocalService: LocalService, private router: Router,  public sanitizer: DomSanitizer, private config : AppConfigService){}


  ngOnInit(): void {
    this.getData();
  }

  getData(){
    let s = this.PreferService.getData()
        .subscribe(data => {
       // console.log(data);
        this.top_slider = data.id_main_slider;
        this.id_last_news = data.id_main_news;
        this.id_main_photogallery = data.id_main_photogallery;
        this.id_main_video = data.id_main_video;
        this.id_slider_banners = data.id_slider_banners;    
        s.unsubscribe(); 
    });
  }
}
