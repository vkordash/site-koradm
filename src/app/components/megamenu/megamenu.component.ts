import { Component, Input, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api'; 
import { Router } from '@angular/router';
import { MegamenuService } from '../../services/megamenu.service';  

@Component({
  selector: 'app-megamenu',
  templateUrl: './megamenu.component.html',
  styleUrls: ['./megamenu.component.sass']
})
export class MegamenuComponent implements OnInit {

  @Input() id: number=0;
  megaMenu: MegaMenuItem[]=[]; 

  constructor(private MegamenuService : MegamenuService,private router: Router) { }

  ngOnInit(): void {
    this.megaMenu = [ 
      { 
        
        icon: 'pi pi-fw pi-ellipsis-h',
        items: [ 
          [ 
            { 
              label: 'AngularJS1'                    
            }, 
            { 
              label: 'ReactJS1'
            }, 
            { 
              label: 'AngularJS1'                    
            }, 
            { 
              label: 'ReactJS1'
            }, 
            { 
              label: 'AngularJS1'                    
            }, 
            { 
              label: 'ReactJS1'
            } 
          ]
        ] 
      } 
    ]; 
    
    this.getMegaMenu();  
  }

  getMegaMenu(): void {
    let s = this.MegamenuService.getData(this.id).subscribe(tmenu => {                       
      this.megaMenu = [...tmenu];
      s.unsubscribe(); 
    }); 
    
 } 
}
