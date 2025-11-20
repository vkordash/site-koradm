import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListVideosService } from '../../services/list-videos.service';
import { Subscription } from 'rxjs';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-list-videos',
  templateUrl: './list-videos.component.html',
  styleUrls: ['./list-videos.component.sass']
})
export class ListVideosComponent implements OnInit {

  NameMenu : string='';
  id_menu : number = 0;
  first    : number = 0;
  rows     : number = 12;
  totalRecords : number = 0;
  ListVideos: any = [];
  private querySubscription : Subscription | undefined; 

  constructor(private ListVideosService : ListVideosService, private MenuService: MenuService, private route: ActivatedRoute, private router: Router) {
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
    let s= this.ListVideosService.getData(this.id_menu,this.rows, this.first)
      .subscribe(data => {
        this.ListVideos = [...data];           
      });      
  }

  onPageChange(event : any) {
    this.rows = event.rows;
    this.first = event.first; // * event.rows;
    this.getData();
    console.log(event);
  }
}
