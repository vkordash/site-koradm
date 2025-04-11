import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Breadcrumb } from '../../interfaces/breadcrump';
import { MenuItem } from 'primeng/api';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { ActivatedRoute } from '@angular/router';
import { ItemMenu } from 'src/app/interfaces/tree';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs : Breadcrumb[]=[];
  items: MenuItem[]=[];
  id=0;
  private querySubscription : Subscription | undefined; 

  constructor(private BreadcrumbService : BreadcrumbService, private router: Router,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.id = params['id'];
      //this.tp = params['tp'];
      this.getData();      
    });  
  }


  getData(){
    let s=this.BreadcrumbService.getData(this.id)      
    . subscribe(data => {       
      this.items = this.convertData(data);
      this.items = [...this.items];
      console.log(this.items);
      s.unsubscribe(); 
    })
  }

  convertData (bc:any[]) {
    bc.map( it=> {
      it.routerLink = '/'+it.routerlink;
      if (it.id_component==1)  {
        it.queryParams = {"id": it.id,"tp":1};
      } 
      else it.queryParams = {"id": it.id};
    })
    return bc;
  }
 
  /*convertData (bc:Breadcrumb[]) {
    this.breadcrumbs = bc; 
    let d: MenuItem[]=[];
    console.log(bc);
    bc.map( it=> { 
      let tmp:MenuItem={};
      tmp.label=it.name;
      if (it.id_component==2) {
        tmp.url='/list_page?id='+it.id;     
      }
      else 
        tmp.url='/page?tp='+String(it.tp)+'&id='+it.id;      
      d.push(tmp);
    })
    return d;
  }*/

}
