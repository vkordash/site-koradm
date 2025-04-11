import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeDocumentsService } from 'src/app/services/type-documents.service';
import { SearchService } from 'src/app/services/search.service';
import { LocalService } from 'src/app/services/local.service';
import { ListPages } from '../../interfaces/listpages';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  Block_Hide: boolean = false;

  searchText: string = '';
  search_s : string ="";
  doc_date_start : string="";
  doc_date_end : string="";
  doc_num : string="";
  doc_typ : number=0;
  documentType : any = [];

  ListPages:  ListPages[] = [];
  ListDocs: any[]=[];



  first    : number = 0;
  rows     : number = 12;
  totalRecords : number = 0;

  typSearch: number =0;

  pub_search_Form = this.fb.group({
    pub_text_search: ['', Validators.required] 
  });
  
  docSearch: any = {};
  pubSearch: any = {};

  docs_search_Form = this.fb.group({
    doc_text_search: [''] , 
    doc_date_start: [''],
    doc_date_end:  [''],
    doc_num: [''],
    doc_typ: 0
  });

  constructor(private TypeDocumentsService : TypeDocumentsService, private SearchService : SearchService, private route: ActivatedRoute, private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params); 
      const setDataForm={
        doc_text_search:'', 
        doc_date_start:'',
        doc_date_end:'',
        doc_num:'',
        doc_typ: 0
      }
      if ((params['from-main']!=undefined) && (params['from-main']==1)) {
        
        //this.docs_search_Form.setValue({'doc_text_search':'10','doc_date_start':'','doc_date_end':'','doc_num':'','doc_typ':0});
        if (params['doc_text_search']!=undefined) setDataForm.doc_text_search=params['doc_text_search'];
        if (params['doc_date_start']!=undefined) setDataForm.doc_date_start=params['doc_date_start'];
        if (params['doc_date_end']!=undefined) setDataForm.doc_date_end=params['doc_date_end'];
        if (params['doc_num']!=undefined) setDataForm.doc_num=params['doc_num'];
        if (params['doc_typ']!=undefined) setDataForm.doc_typ=params['doc_typ'];
        this.docs_search_Form.setValue(setDataForm);
        this.typSearch=params['typSearch'];
        console.log('yes');
        this.first  = 0;
        this.totalRecords = 0;
        this.getData(this.typSearch);
      }
      else {
        this.first  = 0;
        this.totalRecords  = 0;
        this.getTypeDocuments(); 
      }
    }); 
  }

  getTypeDocuments(): void {
    let s = this.TypeDocumentsService.getData().subscribe(data => {                       
      this.documentType = [...data];
      s.unsubscribe(); 
    });     
  } 

  new_search(t:number){
    this.typSearch=0;
    this.getData(t);
  }

  getData(t:number) {
    if (this.typSearch != t) {
      this.first  = 0;
      this.typSearch = t;
      if  (this.typSearch==1) {
        this.pubSearch.limit=this.rows;
        this.pubSearch.offset=this.first;
        this.getCntSearchPublic(this.pubSearch);
      }
      else if (this.typSearch==2){
        this.docSearch.limit=this.rows;
        this.docSearch.offset=this.first;
        this.getCntSearchDocs(this.docSearch);       
      }
    }
    else {
      if  (this.typSearch==1) {
        this.pubSearch.limit=this.rows;
        this.pubSearch.offset=this.first;
        this.getSearchPublic(this.pubSearch);
      }
      else if (this.typSearch==2) {
        this.docSearch.limit=this.rows;
        this.docSearch.offset=this.first;
        this.getSearchDocs(this.docSearch);
      }
    }   
  }
/**********************************************  ПОШУК В ПУБЛІКАЦіЯХ */
  getCntSearchPublic(pubSearch:any){
    this.Block_Hide=true;
    let s = this.SearchService.pubCntSearch(pubSearch).subscribe(data => {                       
      this.totalRecords = data;
      s.unsubscribe(); 
      this.getSearchPublic(this.pubSearch);
    }); 
  }

  getSearchPublic (pubSearch:any): void {  
    this.Block_Hide=true;     
    let s = this.SearchService.pubSearch(pubSearch).subscribe(data => {                       
      this.ListPages = [...data];
      this.Block_Hide=false;
      s.unsubscribe(); 
    }); 
  }

  /**********************************************  ПОШУК В ДОКУМЕНТАХ */
  getCntSearchDocs(docSearch:any)
  {
    this.Block_Hide=true;
    let s = this.SearchService.docCntSearch(docSearch).subscribe(data => {                       
      this.totalRecords = data;
      s.unsubscribe(); 
      this.getSearchDocs(docSearch);
    });
  }
 
  getSearchDocs(docSearch:any){
    this.Block_Hide=true;
    let s = this.SearchService.docSearch(docSearch).subscribe(data => {                       
      this.ListDocs = [...data];
      this.Block_Hide=false;
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
    else if (f=='pub_text_search') {
      this.pubSearch[f] = event.currentTarget.value;
    }
        
  }
  
  onPageChange(event : any) {
    this.rows = event.rows;
    this.first = event.first; // * event.rows;
    this.getData(this.typSearch);
    console.log(event);
  }

  set_page(id : number, id_component : number) 
    {
      console.log(id);
      console.log(id_component);
      this.router.navigate(['/index.php'], {queryParams:{'id': id, 'tp': id_component}} )
    /*  let S = JSON.stringify({'page':4, 'first':this.first, 'rows':this.rows,'pageCount':287});
      
      this.LocalService.saveData('list-pages.'+this.id_menu,S);      
      let _scroll = window.pageYOffset;
      console.log(_scroll);
      this.LocalService.saveData('list-pagesScroll.'+this.id_menu,_scroll.toString());      
      console.log(this.LocalService.getData('list-pages.'+this.id_menu));  
      window.scrollTo(0,0);
      this.router.navigate(['/page'], {queryParams:{'id': id, 'tp': 0}} )     */
    }
}
