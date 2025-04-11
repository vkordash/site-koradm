import { Component, OnInit } from '@angular/core';
import { IConfig } from '@onlyoffice/document-editor-angular';
import { CardDocService } from 'src/app/services/card-doc.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-onlyoffice',
  templateUrl: './onlyoffice.component.html',
  styleUrls: ['./onlyoffice.component.sass']
})
export class OnlyofficeComponent implements OnInit {

  id : number =0;
  visible: boolean = false;
  config : IConfig = {
    document: {
      'fileType': 'docx',
      'key': 'pd_18717_529_0_1d2',
      'title': '1111111111',
      'url': 'http://192.168.77.253/test_docs/repl_docx/121212.docx'
    },
    editorConfig:{
      mode: 'view',
    },    
    documentType: 'word',      
  }
  

  constructor(private CardDocService : CardDocService, private route: ActivatedRoute, private router: Router, private location: Location) {
    
   }

    ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        console.log(params);
        this.id = params['id'];
        this.getData();      
      });      
    }

    getData(): void { 
      let s = this.CardDocService.getDoc(this.id)
      .subscribe(data => {
        this.config = data;
        this.visible = true;     
        s.unsubscribe(); 
      });      
    }
  
  
    onDocumentReady = (event:any) => {
      console.log("Document is loaded");
      this.visible = true;     
    };
  } 
