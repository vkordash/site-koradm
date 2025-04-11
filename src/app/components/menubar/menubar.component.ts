import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuBarService } from '../../services/menubar.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.sass']
})
export class MenubarComponent implements OnInit {

    menuBar: MenuItem[]=[];
    @Input() id: number=1;
    
  constructor(private MenuBarService : MenuBarService,private router: Router) { } 
  
    ngOnInit() {        
       this.getMenuBar();  
    } 

    getMenuBar(): void {
        let s = this.MenuBarService.getData(this.id).subscribe(tmenu => {                       
          this.menuBar = [...tmenu];
          s.unsubscribe(); 
        }); 
        
     } 
       
}
