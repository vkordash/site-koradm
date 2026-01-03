import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListPhotosService } from '../../services/list-photos.service';
import { Subscription } from 'rxjs';
import { GlobalVar } from '../../main-config'; 
import { IListPhoto } from '../../interfaces/listphoto';
import { ListPages } from '../../interfaces/listpages';

@Component({
  selector: 'app-list-photos',
  templateUrl: './list-photos.component.html',
  styleUrls: ['./list-photos.component.sass']
})
export class ListPhotosComponent implements OnInit {

 
  /* УСТАНОВКИ */
    images:  IListPhoto[] = [];
    first    : number = 0;
    rows     : number = 12;
    totalRecords : number = 0;
    private querySubscription : Subscription | undefined; 


  constructor(private ListPhotosService : ListPhotosService, private route: ActivatedRoute, private router: Router) { 
      
  }

  ngOnInit(): void {
    if (this.totalRecords == 0)
      this.getCntAll();
    else
      this.getListAll(this.first,this.rows);  
  }

  getCnt(id_menu : number) : void {
    this.ListPhotosService.getCnt(id_menu)
      .subscribe(cnt => {
        this.totalRecords = cnt; 
        this.first = 0;
        this.getListAll(this.rows,this.first)
      });      
  }

  getListAll(offset : number,limit : number ): void {    
    this.ListPhotosService.getListAll(offset, limit)
      .subscribe(data => {
        this.images = [...data];
        console.log(this.images);       
      });      
  }

  getCntAll() : void {
    this.ListPhotosService.getCntAll()
      .subscribe(cnt => {
        this.totalRecords = cnt; 
        console.log(this.totalRecords);    
        this.first = 0;
        this.getListAll(this.rows,this.first)
      });      
  }

  onPageChange(event : any) {
    this.rows = event.rows;
    this.first = event.first; // * event.rows;
    this.getListAll(this.rows,this.first)   
  }

  set_page(id : number) 
    {
      /*let S = JSON.stringify({'page':4, 'first':this.first, 'rows':this.rows,'pageCount':287});
      
      this.LocalService.saveData('list-pages.'+this.id_menu,S);      
      let _scroll = window.pageYOffset;
      console.log(_scroll);
      this.LocalService.saveData('list-pagesScroll.'+this.id_menu,_scroll.toString());      
      console.log(this.LocalService.getData('list-pages.'+this.id_menu));  
      window.scrollTo(0,0);*/
      this.router.navigate(['/galleria'], {queryParams:{'id': id}} )
    }
}

