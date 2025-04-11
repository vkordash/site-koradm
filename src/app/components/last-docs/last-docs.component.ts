import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListDocsService } from '../../services/list-docs.service';
import { MenuService } from '../../services/menu.service';
import { Subscription } from 'rxjs';
import { GlobalVar } from '../../main-config'; 
import { IDoc } from '../../interfaces/doc';
import { IMenu } from 'src/app/interfaces/tree';
//import { ListDocs } from '../../interfaces/listdocs';
import { SanitizedHtmlPipe } from '../../pipes/sanitized-html.pipe'; 

@Component({
  selector: 'app-last-docs',
  templateUrl: './last-docs.component.html',
  styleUrls: ['./last-docs.component.sass']
})
export class LastDocsComponent implements OnInit {

  @Input() id: number=0;
  @Input() rows: number=0;
  
  listdocs:  IDoc[] = [];
  Menu : IMenu = {"name":"Останні документи","routerLink":"","queryParams":""} ;
  routerLink : string = "/card-doc";

  constructor(private ListDocsService : ListDocsService, private MenuService: MenuService, private route: ActivatedRoute, private router: Router) { 

  }

  ngOnInit(): void {
    this.getMenu();
    this.getData(); 
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

  getData(): void {    
    let s= this.ListDocsService.getLast(this.id,this.rows)
      .subscribe(data => {
        this.listdocs = [...data];    
       // console.log(this.listdocs);   
      });      
  }

}
