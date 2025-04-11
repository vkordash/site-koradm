import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CardDocService } from '../../services/card-doc.service'
import { GlobalVar } from '../../main-config'; 
import { ICardDoc } from '../../interfaces/card-doc';
import { IAttachDocs } from 'src/app/interfaces/attach-docs';
import { IConfig } from '@onlyoffice/document-editor-angular';

@Component({
  selector: 'app-card-doc',
  templateUrl: './card-doc.component.html',
  styleUrls: ['./card-doc.component.sass']
})
export class CardDocComponent implements OnInit {

  card : ICardDoc = {"id":0,"id_card":0,"name":"","dt_create":"","dt_public":""};
  docs : IAttachDocs[] = [];
  id : number =0;
  routerLink: string = "/only-office";
  visible: boolean = false;
  oo: boolean = false;
  
  /*config: IConfig = {
    document: {
      'fileType': 'docx',
      'key': 'pd_18717_529_0_1d2',
      'title': 'Example Document Title.docx',
      'url': 'http://192.168.77.253/test_docs/repl_docx/121212.docx'
      },
      editorConfig:{
        mode: 'view',      
      },    
      documentType: 'word',      
    }*/

      config: IConfig = {
        document: {
          'fileType': '',
          'key': '',
          'title': '',
          'url': ''
          },
          editorConfig:{
            mode: 'view',      
          },    
          documentType: 'word',      
        }


  constructor(private CardDocService : CardDocService, private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.id = params['id'];
      this.getCard();      
    });  
  }

  getCard(){
    let s = this.CardDocService.getPage(this.id)
        .subscribe(data => {
          this.card = data; 
          this.docs = data.docs;   
          this.routerLink= data.path;              
          s.unsubscribe(); 
       });   
  }

  backHistory(): void {
    this.location.back();
  }

  show_item(id:number) {
   
    this.config.document = {
      'fileType': 'docx',
      'key': 'pd_18717_529_0_1d222',
      'title': 'Example Document Title.docx',
      'url': 'http://192.168.77.253/test_docs/repl_docx/121212.docx'
      };    
      this.visible = true;  
      this.oo=true;
      console.log("Visible is true");
  }

  onDocumentReady = (event:any) => {
    console.log("Document is loaded");    
  };

 
}
