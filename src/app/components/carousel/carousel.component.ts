import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselService } from '../../services/carousel.service';
import { Carousel } from '../../interfaces/carousel';
import { GlobalVar } from '../../main-config'; 

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() id : number =0;
  carousel: Carousel[] = []; 
  private url_site = GlobalVar.url_site;  

  public user_template = 0;
  
  constructor(private CarouselService : CarouselService,private router: Router) { }

  ngOnInit() { 
    this.getSlider(this.id);    
  }

  getSlider(id_site : number): void { 
      let s = this.CarouselService.getData(this.id)
        .subscribe (data => { 
         // data = this.convert(data); 
          this.carousel = [...data] ;
          console.log(this.carousel);        
          s.unsubscribe();      
      });      
  }  

  /* convert (data:any[]) {
    console.log(data);
    return data.map(el => {
      el.photo.src = this.url_site+el.photo.src;
      return el;
    });
   }*/

  pageChange(event:any) { 
    console.log(event);
  }; 
}