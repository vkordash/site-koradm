import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListPhotosService } from '../../services/list-photos.service';
import { Subscription } from 'rxjs';
import { GlobalVar } from '../../main-config'; 
import { IPhoto } from '../../interfaces/photo';
import { ListPages } from '../../interfaces/listpages';

@Component({
  selector: 'app-list-photos',
  templateUrl: './list-photos.component.html',
  styleUrls: ['./list-photos.component.sass']
})
export class ListPhotosComponent implements OnInit {

 /* title = 'GFG'; 
  
    images: any[] = [ 
        { 
            previewImageSrc:  
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203171024/CSSTutorial.png', 
            thumbnailImageSrc:  
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203171024/CSSTutorial.png', 
            alt: 'Description for Image 1', 
            title: 'Title 1'
        }, 
        { 
            previewImageSrc:  
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png', 
            thumbnailImageSrc:  
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png', 
            alt: 'Description for Image 2', 
            title: 'Title 2'
        }, 
        { 
            previewImageSrc:  
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/Java.png', 
            thumbnailImageSrc:  
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/Java.png', 
            alt: 'Description for Image 3', 
            title: 'Title 3'
        }, 
        { 
            previewImageSrc:  
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220401124017/HTML-Tutorial.png', 
            thumbnailImageSrc:  
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220401124017/HTML-Tutorial.png', 
            alt: 'Description for Image 4', 
            title: 'Title 4'
        }, 
    ]; */
  /* УСТАНОВКИ */
    Main_photo = 33042;
  
    images:  IPhoto[] = [];
    id_menu  : number = 0;


    first    : number = 0;
    rows     : number = 12;
    totalRecords : number = 0;
    private querySubscription : Subscription | undefined; 


    constructor(private ListPhotosService : ListPhotosService, private route: ActivatedRoute, private router: Router) { 
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
    if (this.totalRecords == 0)
      this.getCnt(this.id_menu);
    else
      this.getData(this.id_menu,this.rows, this.first);  
  }

  getCnt(id_menu : number) : void {
    this.ListPhotosService.getCnt(id_menu)
      .subscribe(cnt => {
        this.totalRecords = cnt; 
        this.first = 0;
        this.getData(this.id_menu,this.rows,this.first)
      });      
  }

  getData(id_menu : number, limit : number, offset : number): void {    
    this.ListPhotosService.getData(id_menu,limit,offset)
      .subscribe(data => {
        this.images = [...data];       
      });      
  }

  onPageChange(event : any) {
    this.rows = event.rows;
    this.first = event.first; // * event.rows;
    this.getData(this.id_menu,this.rows,this.first)
    console.log(this.first);
    console.log(this.rows);
    console.log(event);
  }

  
}

