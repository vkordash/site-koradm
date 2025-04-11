import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from '../../services/page.service'
import { GlobalVar } from '../../main-config'; 
import { IPage } from '../../interfaces/page';

//import { SafeHtmlPipe } from '../../pipes/sanitized-html.pipe'; 

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.sass']
})
export class PageOneComponent implements OnInit {

  page : IPage = {id : 0, head :'', title : '',  text : '', date : ''};
  id_site  : number = GlobalVar.id_site;
  id       : number = 0; 
  tp       : number = 0;   
  id_menu  : number = 0;
  main_page: boolean =  false; //признак главной страницы false - не главная, true - главная

  constructor(private pageService : PageService, private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.id = params['id'];
      this.tp = params['tp'];
      this.getPage();      
    });  
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