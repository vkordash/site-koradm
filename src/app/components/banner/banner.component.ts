import { Component, OnInit, Input } from '@angular/core';
import { BannerService } from '../../services/banner.service';
import { SanitizedHtmlPipe } from '../../pipes/sanitized-html.pipe'; 

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass'],
})
export class BannerComponent implements OnInit {

  @Input() id_banner: number=0;
  Banner: any = '';

  constructor(private bannerService : BannerService) { }

  ngOnInit(): void {
    this.getBanner(this.id_banner);   
  }

  getBanner(id : number): void { 
    let s = this.bannerService.getBanner(id)
      .subscribe (data => { 
       // console.log(data);
          data = data.replace( /\"web_docs/gi, "\"./web_docs" ); 
          this.Banner = data.replace( /\.\/web_docs/gi, "http://koradm.cg.gov.ua/web_docs" );                         
        s.unsubscribe();      
    }); 
  }

}     