import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListPhotosService } from '../../services/list-photos.service';
import { MenuService } from '../../services/menu.service';
import { Subscription } from 'rxjs';
import { GlobalVar } from '../../main-config'; 
import { IDoc } from '../../interfaces/doc';
import { IMenu } from 'src/app/interfaces/tree';
import { IPhoto } from 'src/app/interfaces/photo';
//import { ListDocs } from '../../interfaces/listdocs';
import { SanitizedHtmlPipe } from '../../pipes/sanitized-html.pipe'; 

@Component({
  selector: 'app-last-photos',
  templateUrl: './last-photos.component.html',
  styleUrls: ['./last-photos.component.sass']
})
export class LastPhotosComponent implements OnInit {

  @Input() id: number=0;
  @Input() rows: number=0;
  
  Photos:  IPhoto[] = [{"id_menu":0,"id_page":0,"src":"","alt":"","title":""}];
  Menu : IMenu = {"name":"Фотографії","routerLink":"/","queryParams":""} ;
  routerLink : string = "/list-photos";
  private querySubscription : Subscription | undefined; 

  constructor(private ListPhotosService : ListPhotosService, private MenuService: MenuService, private route: ActivatedRoute, private router: Router) { 
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
          if (queryParam['id']==undefined)
          {
            this.id = 0;            
          }
          else
          {              
            this.id = queryParam['id'];            
          }
      })    
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
        console.log(data); 
        s.unsubscribe();      
      });
    }            
  }

  getData(): void {    
    let s= this.ListPhotosService.getLast(this.id,this.rows)
      .subscribe(data => {
        this.Photos = data;    
        console.log(data);   
      });      
  }

}
