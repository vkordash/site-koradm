import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';
import { GlobalVar } from '../../main-config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Input() name : string= 'Назва організації';
  NameOrg : string = '';
  
  ngOnInit(): void {
    //this.getData(); 
  }

  /*getData(): void {    
    let s=this.ListAnonsService.getLast(this.id,this.rows)
      .subscribe(data => {
        this.listdocs = [...data];    
       // console.log(this.listdocs);   
      });      
  }*/
}

