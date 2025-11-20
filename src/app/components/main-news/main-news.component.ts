import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListPagesService } from '../../services/list-pages.service';
import { MenuService } from '../../services/menu.service';
import { Subscription } from 'rxjs';
import { GlobalVar } from '../../main-config'; 
import { IPage } from '../../interfaces/page';
import { ListPages } from '../../interfaces/listpages';
import { LocalService } from 'src/app/services/local.service';
import { IMenu } from 'src/app/interfaces/tree';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.sass']
})
export class MainNewsComponent implements OnInit {

   /* УСТАНОВКИ */
  
   listNews:  ListPages[] = [];
   id_menu  : number = 0;
   NameMenu ?: string='';
 
   first    : number = 0;
   @Input() rows : number = 12;
   @Input() id : number=0;
   totalRecords : number = 0;


   private querySubscription : Subscription | undefined; 
 
   Menu : IMenu = {"name":"","routerLink":"","queryParams":""} ;
   routerLink : string = "/page";
 
 
 
   constructor(private LocalService: LocalService, private ListPagesService : ListPagesService, private MenuService: MenuService, private route: ActivatedRoute, private router: Router) { 

   }
 
   ngOnInit(): void {
     let s = this.LocalService.getData('list-pages.'+this.id_menu);
     if (s!=''){
       let S = JSON.parse(s);
       console.log(s);
     }
     this.id_menu=this.id;
    this.getMenu();
    this.getData(this.id_menu,this.rows, this.first);              
   }
 
   getMenu() : void{
    if (this.id_menu!=0) {
      let s = this.MenuService.getData(this.id_menu)
        .subscribe(data => {
          data.routerLink = '/'+data.routerlink;
          this.Menu = data;  
        //  console.log(data); 
          s.unsubscribe();      
        });
    }   
  }
 
   


   getData(id_menu : number, limit : number, offset : number): void {    
     let s = this.ListPagesService.getData(id_menu,limit,offset)
       .subscribe(data => {
        this.listNews = [...data];

        /*this.listNews = data.map(function(elem:any) {
          elem.photo = 'http://mena.cg.gov.ua/'+elem.photo;
          return elem ;
        });*/
        
         let YScrool = Number(this.LocalService.getData('list-pagesScroll.'+this.id_menu));
         window.scrollTo(0,YScrool);
         s.unsubscribe();        
       });      
   }
 
  
   set_page(id : number) 
     {
       window.scrollTo(0,0);
       this.router.navigate(['/page'], {queryParams:{'id': id, 'tp': 0}} )     
     }
 

}
