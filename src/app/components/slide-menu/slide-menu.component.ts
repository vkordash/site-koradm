import { Component, OnInit, Input } from '@angular/core';
import { GlobalVar } from 'src/app/main-config';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { SlideMenuService } from '../../services/slide-menu.service';

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.sass']
})
export class SlideMenuComponent implements OnInit {

  SlideMenu : MenuItem[]=[];
  @Input() id: number=0;
  constructor(private SlideMenuService : SlideMenuService) { }

  ngOnInit(): void {
    this.getData();  
  }

  getData(): void {
    let s = this.SlideMenuService.getSlideMenu(this.id).subscribe(data => {             
      this.SlideMenu = [...data];
      s.unsubscribe(); 
    }); 
  }  

}
