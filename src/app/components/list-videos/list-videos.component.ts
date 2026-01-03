import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListVideosService } from '../../services/list-videos.service';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-list-videos',
  templateUrl: './list-videos.component.html',
  styleUrls: ['./list-videos.component.scss']
})
export class ListVideosComponent implements OnInit {

  NameMenu : string='';
  id_menu : number = 0;
  first    : number = 0;
  rows     : number = 12;
  totalRecords : number = 0;
  ListVideos: any = [];
  private querySubscription : Subscription | undefined; 

  public user_template = 0;

  constructor(private ListVideosService : ListVideosService, private MenuService: MenuService, private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) {
      this.querySubscription = route.queryParams.subscribe(
          (queryParam: any) => {
            this.id_menu = queryParam['id'];
            this.first  = 0;
            this.totalRecords     = 0;              
          }
      );
   }

  ngOnInit(): void {
    
    this.getMenu();
    this.getCnt(); 
  }

  getMenu() : void{
    if (this.id_menu!=0) {
      let s = this.MenuService.getData(this.id_menu)
        .subscribe(data => {
          this.NameMenu = data.label;  
          console.log(data); 
          s.unsubscribe();      
        });
    }
        
  }

  getCnt() : void {
    let s = this.ListVideosService.getCnt(this.id_menu)
      .subscribe(cnt => {
        this.totalRecords = cnt; 
        this.getData();
        s.unsubscribe(); 
      });      
  }

  getData(): void {    
    this.ListVideosService.getData(this.id_menu, this.first, this.rows)
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
  /*getData(): void {    
    let s= this.ListVideosService.getData(this.id_menu,this.rows, this.first)
      .subscribe(data => {
        this.ListVideos = [...data];           
      });      
  }*/

  onPageChange(event : any) {
    this.rows = event.rows;
    this.first = event.first; // * event.rows;
    this.getData();
    console.log(event);
  }

  extractUrlFromIframe(html: string): string {
      const match = html.match(/src="([^"]+)"/);
    return match ? match[1] : '';
  }
}
