import { Component, OnInit } from '@angular/core';
import { ChipsService } from 'src/app/services/chips.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.sass']
})
export class ChipsComponent implements OnInit {

  chips: string[]=['sdgdfg','dfgdfgdf'];
  id_component = 1;
  id= 33197;
  private querySubscription : Subscription | undefined; 

  constructor(private ChipsService : ChipsService, private router: Router,private route: ActivatedRoute,) {
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
          if (queryParam['id']!==undefined)
          {              
            this.id = queryParam['id'];            
          }
          if (queryParam['tp']!==undefined)
            {              
              this.id_component = queryParam['tp'];            
            }
      })
  }

  ngOnInit(): void {
    this.getChips();
  }

  getChips(): void {        
    this.ChipsService.getChips(this.id, this.id_component)
      .subscribe(data => {
        this.chips =[...data];
        console.log('chips = ', data) 
      });      
  }

}
