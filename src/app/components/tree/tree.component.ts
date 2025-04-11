import { Component, OnInit, Input, ViewChild } from '@angular/core'; 
import { MenuItem, TreeNode } from 'primeng/api'; 
import { Router } from '@angular/router';
import { GlobalVar } from 'src/app/main-config';
import { TreeService } from '../../services/tree.service';
import { IMenu, ItemMenu } from "../../interfaces/tree"
//import { IMenu,  } from '../../type';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.sass']
})
export class TreeComponent implements OnInit {

  @Input() id_menu: number=0;

   data: TreeNode[] = []; 
   // cols: any[] = []; 
    Menu : ItemMenu[]=[];
    SelectedItem?: ItemMenu;
    toolsMenu: MenuItem[]=[]; 
    current_menu_id: number = 0;
    preference_show: boolean = false; 
    preference_showAccess: boolean = false;
    visible: boolean = false;
    openNode: number[]=[];

    constructor(private treeService : TreeService,private router: Router) { }

    ngOnInit() {         
        this.getMenu(this.id_menu);
    } 

    displayMessage(mess:any){
        console.log(mess);
    }

    handleClick(event: any) { 
        this.SelectedItem = event.node;
        console.log(this.SelectedItem);
        var params : any = {'id':event.node.key,'typ':event.node.id_component};
        this.router.navigate([event.node.url],{queryParams: params});      
    } 

    getMenu(id:number): void {
        let s = this.treeService.getMenu(id).subscribe(tmenu => {                         
            this.data = [...tmenu];
            s.unsubscribe(); 
        }); 
    }

    

}