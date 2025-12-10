import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListPagesService } from '../../services/list-pages.service';
import { MenuService } from '../../services/menu.service';
import { Subscription } from 'rxjs';
import { GlobalVar } from '../../main-config'; 
import { IPage } from '../../interfaces/page';
import { ListPages } from '../../interfaces/listpages';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-list-pages',
  templateUrl: './list-pages.component.html',
  styleUrls: ['./list-pages.component.scss']
})
export class ListPagesComponent implements OnInit {

  
  /* УСТАНОВКИ */
  Main_news = 33033;
  
  listNews:  ListPages[] = [];
  id_menu  : number = 0;
  NameMenu ?: string='';

  first    : number = 0;
  rows     : number = 12;
  totalRecords : number = 0;
  private querySubscription : Subscription | undefined; 

  
public user_template = 0;


  constructor(private LocalService: LocalService, private ListPagesService : ListPagesService, private MenuService: MenuService, private route: ActivatedRoute, private router: Router) { 
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
          if (queryParam['id']==undefined)
          {
            this.id_menu = this.Main_news;
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
    let s = this.LocalService.getData('list-pages.'+this.id_menu);
    if (s!=''){
      let S = JSON.parse(s);
     // this.LocalService.clearData();
      this.first = S.first;
      this.rows = S.rows;
      console.log(s);
    }


    if (this.totalRecords == 0) {
      this.getCnt();
      this.getMenu();
    }      
    else
      this.getData(this.id_menu,this.rows, this.first);              
  }

  getMenu() : void{
    let s = this.MenuService.getData(this.id_menu)
      .subscribe(data => {
        this.NameMenu = data.label;  
        s.unsubscribe();      
      });
        
  }

  getCnt() : void {
    let s = this.ListPagesService.getCnt(this.id_menu)
      .subscribe(cnt => {
        this.totalRecords = cnt; 
        this.getData(this.id_menu,this.rows,this.first);
        s.unsubscribe(); 
      });      
  }

  getData(id_menu : number, limit : number, offset : number): void {    
    let s = this.ListPagesService.getData(id_menu,limit,offset)
      .subscribe(data => {
        this.listNews = [...data];
       
        let YScrool = Number(this.LocalService.getData('list-pagesScroll.'+this.id_menu));
        window.scrollTo(0,YScrool);
        s.unsubscribe();        
      });      
  }

  onPageChange(event : any) {
    this.rows = event.rows;
    this.first = event.first; // * event.rows;
    this.getData(this.id_menu,this.rows,this.first)
    console.log(event);
  }

  set_page(id : number) 
    {
      let S = JSON.stringify({'page':4, 'first':this.first, 'rows':this.rows,'pageCount':287});
      
      this.LocalService.saveData('list-pages.'+this.id_menu,S);      
      let _scroll = window.pageYOffset;
      console.log(_scroll);
      this.LocalService.saveData('list-pagesScroll.'+this.id_menu,_scroll.toString());      
      console.log(this.LocalService.getData('list-pages.'+this.id_menu));  
      window.scrollTo(0,0);
      this.router.navigate(['/page'], {queryParams:{'id': id, 'tp': 0}} )     
    }

}
