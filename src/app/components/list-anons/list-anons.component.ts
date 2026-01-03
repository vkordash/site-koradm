import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListPagesService } from '../../services/list-pages.service';
import { MenuService } from '../../services/menu.service';
import { Subscription } from 'rxjs';
import { GlobalVar } from '../../main-config'; 
import { IPage } from '../../interfaces/page';
import { ListPages } from '../../interfaces/listpages';

@Component({
  selector: 'app-list-anons',
  templateUrl: './list-anons.component.html',
  styleUrls: ['./list-anons.component.sass']
})
export class ListAnonsComponent implements OnInit {

 
  /* УСТАНОВКИ */
  Main_news = 33033;
  
  listNews:  ListPages[] = [];
  id_menu  : number = 0;
  NameMenu ?: string='';

  first    : number = 0;
  rows     : number = 12;
  totalRecords : number = 0;
  private querySubscription : Subscription | undefined; 

  constructor(private ListPagesService : ListPagesService, private MenuService: MenuService, private route: ActivatedRoute, private router: Router) { 
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
          if (queryParam['id']==undefined)
          {
            this.id_menu = this.Main_news;;
            this.first  = 0;
            this.totalRecords     = 0;
          }
          else
          {              
            this.id_menu = queryParam['id'];
            this.first  = 0;
            this.totalRecords     = 0;
          }

      }
  );
  }

  ngOnInit(): void {
    if (this.totalRecords == 0) {
      this.getCnt();
      this.getMenu()
    }      
    else
      this.getData(this.id_menu, this.first, this.rows );              
  }

  getMenu() : void{
    let s = this.MenuService.getData(this.id_menu)
      .subscribe(data => {
        this.NameMenu = data.label;  
        console.log(data.label); 
        s.unsubscribe();      
      });
        
  }

  getCnt() : void {
    let s = this.ListPagesService.getCnt(this.id_menu)
      .subscribe(cnt => {
        this.totalRecords = cnt; 
        this.first = 0;
        this.getData(this.id_menu,this.first,this.rows);
        s.unsubscribe(); 
      });      
  }

  getData(id_menu : number, offset : number, limit : number): void {    
    let s = this.ListPagesService.getData(id_menu, offset, limit)
      .subscribe(data => {
        this.listNews = [...data];
        s.unsubscribe();        
      });      
  }

  onPageChange(event : any) {
    this.rows = event.rows;
    this.first = event.first; // * event.rows;
    this.getData(this.id_menu,this.first,this.rows)
    console.log(this.first);
    console.log(this.rows);
    console.log(event);
  }

  set_page(id : number) 
    {
      window.scrollTo(0,0);
      this.router.navigate(['/page'], {queryParams:{'id': id, 'tp': 0}} )     
    }


}
