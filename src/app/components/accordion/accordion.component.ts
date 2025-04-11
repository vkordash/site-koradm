import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccordionService } from '../../services/accordion.service';
import { MenuService } from 'src/app/services/menu.service';
import { Router } from '@angular/router';
import { ItemMenu } from '../../interfaces/tree';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.sass']
})
export class AccordionComponent implements OnInit {

   id       : number = 0; 
    tp       : number = 0;  
    id_menu  : number = 0; 
    Menu : ItemMenu = {'id':0,'name':'',icon:'',children:[]};
    SubMenu : ItemMenu[]=[];
      
    constructor(private route: ActivatedRoute, private router: Router, private AccordionService : AccordionService, private MenuService : MenuService) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {      
      this.id = params['id']; 
      this.getData ();                
    });
  }
  getData (){
    if (this.id>0) {
      let s = this.MenuService.getData(this.id).subscribe(menu => {                    
        this.Menu = menu;  
        this.getSubMenuData();       
        s.unsubscribe(); 
      }); 
    }    
  }

  getSubMenuData (){
    let s = this.AccordionService.getAccordion(this.id).subscribe(menu => {             
      this.SubMenu = [...menu];
      console.log(this.Menu);
     // if (this.SubMenu.length==0) this.SubMenu = [{'id':0,'name':'Субменю відсутнє',icon:'',children:[]}];
      s.unsubscribe(); 
    });   
  }
}
