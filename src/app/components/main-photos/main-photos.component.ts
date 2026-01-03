import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListPhotosService } from '../../services/list-photos.service';
import { MenuService } from 'src/app/services/menu.service';
import { IPhoto } from '../../interfaces/photo';
import { IMenu } from 'src/app/interfaces/tree';
import { Input } from '@angular/core';

@Component({
  selector: 'app-main-photos',
  templateUrl: './main-photos.component.html',
  styleUrls: ['./main-photos.component.scss']
})
export class MainPhotosComponent implements OnInit {

  images:  IPhoto[] = [];
  Menu : IMenu = {"name":"","routerLink":"","queryParams":""} ;
 
  @Input() rows : number = 6;
  @Input() id : number=0;

  public user_template = 0;

  constructor(private ListPhotosService : ListPhotosService, private MenuService: MenuService, private route: ActivatedRoute, private router: Router) { 

  }

  ngOnInit(): void {
    this.getMenu();
    this.getData(this.id,this.rows,0);
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
  getData(id_menu : number, offset : number, limit : number): void {    
    this.ListPhotosService.getData(id_menu,offset,limit)
      .subscribe(data => {
        this.images = [...data];       
      });      
  }  
}
