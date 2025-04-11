import { Component, OnInit, Input } from '@angular/core';
import { GlobalVar } from 'src/app/main-config';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { PanelmenuService } from '../../services/panelmenu.service';

@Component({
  selector: 'app-panelmenu',
  templateUrl: './panelmenu.component.html',
  styleUrls: ['./panelmenu.component.sass']
})

export class PanelmenuComponent implements OnInit {

  @Input() id: number=0;

  PanelMenu:MenuItem[]=[];

  constructor(private PanelmenuService : PanelmenuService) { }

  ngOnInit(): void {
    this.getData();  
  }

  getData(): void {
    let s = this.PanelmenuService.getPanelMenu(this.id).subscribe(data => {             
      this.PanelMenu = [...data];
      s.unsubscribe(); 
    }); 
  }  
}