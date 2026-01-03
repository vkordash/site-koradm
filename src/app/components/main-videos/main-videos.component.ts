import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListVideosService } from '../../services/list-videos.service';
import { MenuService } from 'src/app/services/menu.service';
import { IVideo } from '../../interfaces/video';
import { IMenu } from 'src/app/interfaces/tree';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SanitizedHtmlPipe } from '../../pipes/sanitized-html.pipe'; 

@Component({
  selector: 'app-main-videos',
  templateUrl: './main-videos.component.html',
  styleUrls: ['./main-videos.component.scss']
})
export class MainVideosComponent implements OnInit {

  ListVideos:  IVideo[] = [];
  Menu : IMenu = {"name":"","routerLink":"","queryParams":""} ;
  @Input() rows : number = 3;
  
  @Input() params : {id:number; rows:number} ={id:0,rows:0};
  
  id: number = 8;

  public user_template = 0;

   

  constructor(private ListVideosService : ListVideosService, private MenuService: MenuService, private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) { 

  }

  ngOnInit(): void {
    console.log(this.params);
    this.getMenu();
    this.getData(this.id, 0, this.rows);
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
  getData(id_menu : number, offset : number, limit : number): void {    
    this.ListVideosService.getData(id_menu, offset, limit)
    .subscribe((data: any[]) => {
    this.ListVideos = data.map((v: any) => {
      const rawUrl = this.extractUrlFromIframe(v.link_frame); // если приходит HTML
      const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);

      return {
        ...v,
        link_frame: safeUrl
      };
    });
  });
  } 

  extractUrlFromIframe(html: string): string {
      const match = html.match(/src="([^"]+)"/);
    return match ? match[1] : '';
  }

}
