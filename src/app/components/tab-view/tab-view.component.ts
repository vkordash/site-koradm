import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabViewService } from '../../services/tab-view.service';
import { MenuService } from 'src/app/services/menu.service';
import { Router } from '@angular/router';
import { ItemMenu } from '../../interfaces/tree';

@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.sass']
})
export class TabViewComponent implements OnInit {

  id       : number = 0; 
  tp       : number = 0;  
  id_menu  : number = 0; 
  Menu : ItemMenu = {'id':0,'name':'',icon:'',children:[]};
  SubMenu : ItemMenu[]=[];
    
  constructor(private route: ActivatedRoute, private router: Router, private TabViewService : TabViewService, private MenuService : MenuService) { }
 
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {      
      this.id = params['id']; 
      this.getData ();  
      this.getSubMenuData();               
    });
  }

  getData (): void {
    if (this.id>0) {
      let s = this.MenuService.getData(this.id).subscribe(menu => {                    
        this.Menu = menu;                
        s.unsubscribe(); 
      }); 
    }    
  }

  getSubMenuData (): void {
    let s = this.TabViewService.getTabs(this.id).subscribe(menu => {             
      this.SubMenu = menu;
      console.log(this.SubMenu);
      s.unsubscribe(); 
    });   
  }

}
