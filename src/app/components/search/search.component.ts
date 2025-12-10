import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { SearchRecord } from '../../interfaces/search';
import { map } from 'rxjs/operators';
import { LazyLoadEvent } from 'primeng/api';
import { Router } from '@angular/router';
import { HighlightPipe } from '../../pipes/highlight.pipe'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
 
  
  form!: FormGroup;
  results: SearchRecord[] = [];
  loading = false;

  total = 0;
  limit = 10;
  offset = 0;

  lastQuery = '';
  lastDateFrom = '';
  lastDateTo = '';

  constructor(private searchService: SearchService, private router: Router ) {}

  ngOnInit() {
    this.form = new FormGroup({
      query: new FormControl(''),
      dateFrom: new FormControl(null),
      dateTo: new FormControl(null)
    });
  }

  // Клик "Поиск"
  onSearch() {
    this.lastQuery = this.form.value.query.trim();
    this.lastDateFrom = this.formatDate(this.form.value.dateFrom);
    this.lastDateTo = this.formatDate(this.form.value.dateTo);

    this.offset = 0;
    this.loadData();
  }

  // Lazy load
  loadLazy(event: LazyLoadEvent) {
    if (event.first !== undefined) this.offset = event.first;
    if (event.rows !== undefined) this.limit = event.rows;

    this.loadData();
  }

  // Формат DD.MM.YYYY → YYYY-MM-DD
  formatDate(date: any): string {
    if (!date) return '';
    const d = new Date(date);
    if (isNaN(d.getTime())) return '';
    return d.toISOString().split('T')[0];
  }

  loadData() {
    if (!this.lastQuery) return;

    this.loading = true;

    this.searchService.search(
        this.lastQuery,
        this.limit,
        this.offset,
        this.lastDateFrom,
        this.lastDateTo
      )
   /*   .pipe(
        map((res:any) => ({
          ...res,
          items: res.items.map((i:any) => ({
            ...i,
            fragment: this.highlight(i.fragment, this.lastQuery)
          }))
        }))
      )*/
      .subscribe({
        next: (res:any) => {
          this.results = res.results;
          this.total = res.total;
          this.loading = false;
        },
        error: () => (this.loading = false)
      });
  }

  highlight(text: string, query: string): string {
    const safe = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return text.replace(
      new RegExp(safe, 'gi'),
      match => `<span class="highlight">${match}</span>`
    );
  }

  openDetails(row: any) {
    if (row.id_component==2){
      const url = this.router.createUrlTree(['/page'], { queryParams: { id: row.id, tp: 0 } });
      window.open(url.toString(), '_blank');
    }
    else {
      const url = this.router.createUrlTree(['/page'], { queryParams: { id: row.id_menu } });
      window.open(url.toString(), '_blank');
    }    
  }
}