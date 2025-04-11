import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListDocsService } from '../../services/list-docs.service';
import { MenuService } from 'src/app/services/menu.service';
import { Subscription } from 'rxjs';
import { GlobalVar } from '../../main-config'; 
import { IDoc } from '../../interfaces/doc';
import { IMenu } from 'src/app/interfaces/tree';
//import { ListDocs } from '../../interfaces/listdocs';

@Component({
  selector: 'app-list-docs',
  templateUrl: './list-docs.component.html',
  styleUrls: ['./list-docs.component.sass']
})
export class ListDocsComponent implements OnInit {

  /* УСТАНОВКИ */
  Main_docs: number =0;
  listdocs:  IDoc[] = [];
  id_menu  : number = 0;
  Menu ?: IMenu ;



  first    : number = 0;
  rows     : number = 10;
  totalRecords : number = 0;
  private querySubscription : Subscription | undefined; 

  constructor(private ListDocsService : ListDocsService,  private MenuService: MenuService,  private route: ActivatedRoute, private router: Router) { 
    this.querySubscription = route.queryParams.subscribe(
        (queryParam: any) => {
            if (queryParam['id']==undefined)
            {
              this.id_menu = this.Main_docs;;
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

  getCnt(id_menu : number) : void {
    this.ListDocsService.getCnt(id_menu)
      .subscribe(cnt => {
        this.totalRecords = cnt; 
        this.first = 0;
        this.getData(this.id_menu,this.rows,this.first)
      });      
  }

  getMenu() : void{
    let s = this.MenuService.getData(this.id_menu)
    .subscribe(data => {
      this.Menu = data;  
      console.log(data.label); 
      s.unsubscribe();      
    });        
  }

  getData(id_menu : number, limit : number, offset : number): void {    
    this.ListDocsService.getData(id_menu,limit,offset)
      .subscribe(data => {
        this.listdocs = [...data];       
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

  set_item(id : number) 
    {
      window.scrollTo(0,0);
      this.router.navigate(['/card-doc'], {queryParams:{'id': id}} )     
      console.log(id);
    }
}

