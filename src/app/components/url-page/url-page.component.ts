import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { GlobalVar } from '../../main-config'; 
import { IPage } from '../../interfaces/page';
import { ListPages } from '../../interfaces/listpages';


@Component({
  selector: 'app-url-page',
  templateUrl: './url-page.component.html',
  styleUrls: ['./url-page.component.sass']
})
export class UrlPageComponent implements OnInit {

  private querySubscription : Subscription | undefined; 
  id_menu : number = 0;

  constructor(private MenuService : MenuService, private route: ActivatedRoute, private router: Router) { 
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
          this.id_menu = queryParam['id'];          
      }
    );
  }

  ngOnInit(): void {
    this.getData();              
  }

  getData (){
    let s = this.MenuService.getData(this.id_menu)
      .subscribe(data => { 
        console.log(data); 
        if (data.url === 'index.php') {
          this.router.navigate(['/']);
        }
        else //this.router.navigate([data.url]);
          window.open(data.url, '_blank');
        s.unsubscribe(); 

      }); 
  }
}
  
