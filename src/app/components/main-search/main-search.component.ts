import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from "primeng/api"; 
import { TypeDocumentsService } from 'src/app/services/type-documents.service';
import { LocalService } from 'src/app/services/local.service';


@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.sass'],
  providers: [MessageService]
})
export class MainSearchComponent implements OnInit {

  docSearch: any = {};
  documentType : any = [];

  
  docs_search_Form = this.fb.group({
    doc_text_search: [''] , 
    doc_date_start: [''],
    doc_date_end:  [''],
    doc_num: [''],
    doc_typ: 0    
  });

  constructor(private messageService: MessageService, private TypeDocumentsService : TypeDocumentsService, private LocalService : LocalService, private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getTypeDocuments();    
  }

  getTypeDocuments(): void {
    let s = this.TypeDocumentsService.getData().subscribe(data => {                       
      this.documentType = [...data];
      s.unsubscribe(); 
    });     
  } 

  onChange(f:string,event:any) : void {
    if (f=='doc_num'){
      this.docSearch[f] = event.currentTarget.value;
    }
    else if (f=='doc_text_search'){
      this.docSearch[f] = event.currentTarget.value;
    }
    else if (f=='doc_typ'){
      this.docSearch[f] = event.value;
    }    
    else if (f=='doc_date_start') {
      this.docSearch[f] = event;  
    }
    else if (f=='doc_date_end') {
      this.docSearch[f] = event;  
    }        
  }

  onSubmit(){
    console.log(this.docs_search_Form);
    let S= JSON.stringify(this.docSearch);    
    if (S=='{}') {
      this.popUpServces();
    }
    else {
      this.LocalService.saveData('main-search-form',S);  
      //this.router.navigate(['/search'], {queryParams:{'from-main': 1}}); 
      this.docSearch['from-main']=1;  
      this.docSearch['typSearch']=2;     
      this.router.navigate(['/search'], {queryParams:this.docSearch});        
    }
    //console.log(this.docs_search_Form.value);  // {userName: 'Anakin',   userDescr: 'Jedai'} 
  }

  popUpServces() { 
    this.messageService.add({ 
      severity: "error", 
      summary: "Помилка: ", 
      detail: "Форма не може бути пустою!", 
    }); 
  } 
}
