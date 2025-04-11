import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListPhotosService } from '../../services/list-photos.service';
import { ListVideosService } from 'src/app/services/list-videos.service';
import { MenuService } from 'src/app/services/menu.service';
import { IPhoto } from '../../interfaces/photo';
import { IMenu } from 'src/app/interfaces/tree';
import { IVideo } from '../../interfaces/video';
import { SanitizedHtmlPipe } from '../../pipes/sanitized-html.pipe'; 

@Component({
  selector: 'app-main-media',
  templateUrl: './main-media.component.html',
  styleUrls: ['./main-media.component.sass']
})
export class MainMediaComponent implements OnInit {

  ListPhotos:  IPhoto[] = [];
  ListVideos:  IVideo[] = [];
  Menu : IMenu = {"name":"","routerLink":"","queryParams":""} ;
  id_photo : number = 30723;
  rows_photo: number=4;
  id_video : number = 8;
  rows_video: number=1;
  id=0;

  constructor(private ListVideosService : ListVideosService,private ListPhotosService : ListPhotosService, private MenuService: MenuService, private route: ActivatedRoute, private router: Router) { 

  }

  ngOnInit(): void {
    //this.getMenu();
    this.getDataPhoto(this.id_photo,this.rows_photo,0);
    this.getDataVideo(this.id_video,this.rows_video,0);
  }

  getMenu() : void{
    if (this.id!=0) {
      let s = this.MenuService.getData(this.id)
        .subscribe(data => {
          data.routerLink = '/'+data.routerlink;
          this.Menu = data;  
        //  console.log(data); 
          s.unsubscribe();      
        });
    }   
  }
  getDataPhoto(id_menu : number, limit : number, offset : number): void {    
    this.ListPhotosService.getData(id_menu,limit,offset)
      .subscribe(data => {
        this.ListPhotos = [...data];       
      });      
  } 

  getDataVideo(id_menu : number, limit : number, offset : number): void {    
    this.ListVideosService.getData(id_menu,limit,offset)
      .subscribe(data => {
        this.ListVideos = [...data];       
      });      
  } 

}
