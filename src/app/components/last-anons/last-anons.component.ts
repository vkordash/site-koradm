import { Component, OnInit, Input } from '@angular/core';
import { ListAnonsService } from '../../services/list-anons.service';
import { MenuService } from 'src/app/services/menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SanitizedHtmlPipe } from '../../pipes/sanitized-html.pipe'; 
import { ListPages } from '../../interfaces/listpages';
import { IMenu } from 'src/app/interfaces/tree';

@Component({
  selector: 'app-last-anons',
  templateUrl: './last-anons.component.html',
  styleUrls: ['./last-anons.component.scss']
})
export class LastAnonsComponent implements OnInit {

  @Input() id: number=0;
  @Input() rows: number=0;
  
  listdocs:  ListPages[] = [];
  Menu : IMenu = {"name":"","routerLink":"","queryParams":""} ;
  routerLink : string = "/page";

  public user_template = 0;

  constructor(private ListAnonsService : ListAnonsService,   private MenuService: MenuService, private route: ActivatedRoute, private router: Router) { 

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
          console.log('Анонси');
          console.log(data); 
          s.unsubscribe();      
        });
    }   
  }

  getData(): void {    
    let s=this.ListAnonsService.getLast(this.id,this.rows)
      .subscribe(data => {
        this.listdocs = [...data];    
       // console.log(this.listdocs);   
      });      
  }

  set_page(id : number) 
  {
    window.scrollTo(0,0);
    this.router.navigate(['/page'], {queryParams:{'id': id, 'tp': 0}} )     
  }
}
