import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GalleriaService } from '../../services/galleria.service';
import { Subscription } from 'rxjs';
import { GlobalVar } from '../../main-config'; 
import { IPhoto } from '../../interfaces/photo';
import { MenuService } from '../../services/menu.service';


@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.sass']
})
export class GalleriaComponent implements OnInit {

  /* УСТАНОВКИ */
    Main_photo = 33042;
  
    images:  IPhoto[] = [];
    id_menu  : number = 0;


    first    : number = 0;
    rows     : number = 12;
    totalRecords : number = 0;

    NameMenu ?: string='';
    private querySubscription : Subscription | undefined; 

  constructor(private GalleriaService : GalleriaService, private MenuService: MenuService, private route: ActivatedRoute, private router: Router) { 
      this.querySubscription = route.queryParams.subscribe(
        (queryParam: any) => {
            if (queryParam['id']==undefined)
            {
              this.id_menu = this.Main_photo;;
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
    this.getMenu();
    if (this.totalRecords == 0)
      this.getCnt(this.id_menu);
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

  getCnt(id_menu : number) : void {
    this.GalleriaService.getCnt(id_menu)
      .subscribe(cnt => {
        this.totalRecords = cnt; 
        this.first = 0;
        this.getData(this.id_menu,this.rows,this.first)
      });      
  }

  getData(id_menu : number, limit : number, offset : number): void {    
    this.GalleriaService.getData(id_menu,limit,offset)
      .subscribe(data => {
        this.images = [...data];       
      });      
  }

}
