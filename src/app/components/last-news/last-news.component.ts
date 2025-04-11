import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { ListPagesService } from '../../services/list-pages.service';
import { IMenu } from 'src/app/interfaces/tree';
import { SanitizedHtmlPipe } from '../../pipes/sanitized-html.pipe'; 


@Component({
  selector: 'app-last-news',
  templateUrl: './last-news.component.html',
  styleUrls: ['./last-news.component.sass']
})
export class LastNewsComponent implements OnInit {

  @Input() id: number=0;
  @Input() rows: number=0;
  
  listNews:any[]=[];
  Menu : IMenu = {"name":"","routerLink":"","queryParams":""} ;
  routerLink : string = "/page";

  
  constructor(private ListPagesService : ListPagesService, private MenuService: MenuService, private route: ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.getMenu();
    this.getData();              
  }

  getData(): void {    
    let s = this.ListPagesService.getLast(this.id, this.rows)
      .subscribe(data => {
        this.listNews = [...data];
        s.unsubscribe();        
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
  set_page(id : number) 
  {
    window.scrollTo(0,0);
    this.router.navigate(['/page'], {queryParams:{'id': id, 'tp': 0}} )     
  }
}
