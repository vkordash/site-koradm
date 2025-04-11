import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { ContentService } from '../../services/content.service'; 
import { IMenu } from 'src/app/interfaces/tree';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {
  
  id: number = 0;
  content: IMenu[] = [];
  
  constructor(private contentService : ContentService, private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.getContent();
    });
  }

  getContent(){
    let s = this.contentService.getContent(this.id)
    .subscribe (data => { 
      console.log(data);
      data = this.convertData(data);
      this.content = [...data];//.replace( /\.\/web_docs/gi, "http://koradm.cg.gov.ua/web_docs" )];                         
      s.unsubscribe();      
  }); 
  }  

  convertData (bc:any[]) {
    bc.map( it=> {
      it.routerLink = '/'+it.routerlink;
      if (it.id_component==1)  {
        it.queryParams = {"id": it.id,"tp":1};
      } 
      else it.queryParams = {"id": it.id};
    })
    return bc;
  }
}


/**
 * 
 * 
 * 
 * constructor(private siteService : SiteService, private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.id = params['id'];
      this.tp = params['tp'];
      if(this.tp==9)
        this.router.navigate(['/gallery'], {queryParams:{'id': this.id, 'tp':this.tp}})
      else if(this.tp==7)
        this.router.navigate(['/docs'], {queryParams:{'id': this.id, 'tp':this.tp}})
      else if(this.tp==0)
        this.router.navigate(['/list-contents'], {queryParams:{'id': this.id, 'tp':this.tp}})
      
      let mp =  params['main'];
      if (mp == undefined)
        this.main_page=false;
      else
        this.main_page=true;

      this.siteService.getPage(this.id,this.tp,this.id_site)
        .subscribe(page => {
          let c = page.cols;
          this.siteService.setCols(c);
          this.siteService.setBC(page.bc);
          this.id_menu = page.id_menu;
          this.page = page.page;
          this.page.text = page.page.text.replace( /\.\/web_docs/gi, "http://koradm.cg.gov.ua/web_docs" );    
          console.log(this.page);
       });   
    });  
  }
 * 
 */