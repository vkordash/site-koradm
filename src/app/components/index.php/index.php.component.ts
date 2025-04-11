import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index.php',
  templateUrl: './index.php.component.html',
  styleUrls: ['./index.php.component.sass']
})
export class IndexPhpComponent implements OnInit {

  id: number=0;
  tp: string='';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.tp = params['tp'];
      this.id = params['id'];

      if (this.tp=='2'){
        this.router.navigate(['/list-pages'],{queryParams: { id: this.id, tp: 2, offset: 0, limit: 25 }})
      }
      else if (this.tp=='1') {
        this.router.navigate(['/page'],{queryParams: { id: this.id, tp: 1 }})
      }
      else if (this.tp=='0') {
        this.router.navigate(['/page-one'],{queryParams: { id: this.id, tp: 1 }})
      }
      else if (this.tp=='pub_equery'){
        this.router.navigate(['/pub-query'],{queryParams: { }})
      }
      else if (this.tp=='equery'){
        this.router.navigate(['/virt-reception'],{queryParams: { }})
      }
      else {
         this.router.navigate(['/notFound']);
      }
    }); 
  }

}
