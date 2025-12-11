import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from '../../services/page.service'
import { GlobalVar } from '../../main-config'; 
import { IPage } from '../../interfaces/page';
import { MenuService } from '../../services/menu.service';
import { IMenu } from 'src/app/interfaces/tree';
import { SanitizedHtmlPipe } from '../../pipes/sanitized-html.pipe'

//import { SafeHtmlPipe } from '../../pipes/sanitized-html.pipe'; 

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  page : IPage = {id : 0, head :'', title : '',  text : '', date : ''};
  id_site  : number = GlobalVar.id_site;
  id       : number = 0; 
  tp       : number = 0;   
  id_menu  : number = 0;
  main_page: boolean =  false; //признак главной страницы false - не главная, true - главная
  Menu : IMenu = {"name":"","routerLink":"","queryParams":""} ;

  public user_template = 0;

  public id_last_anons=7;
  public rows_last_anons = 6;
  public id_last_docs=40958;
  public rows_last_docs = 6;

  constructor(private pageService : PageService, private route: ActivatedRoute, private MenuService: MenuService, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.id = params['id'];
      this.tp = params['tp'] ? Number(params['tp']) : 1;
      this.getMenu()
      this.getPage();      
    });  
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
  getPage(){
    let s = this.pageService.getPage(this.id,this.tp)
        .subscribe(page => {
          this.page = page;
        //  this.page.text = page.text.replace( /\.\/web_docs/gi, "http://koradm.cg.gov.ua/web_docs" );    
          s.unsubscribe(); 
       });   
  }

  backHistory(): void {
    this.location.back();
  }

}