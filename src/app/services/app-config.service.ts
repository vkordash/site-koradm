import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private config: any;

  constructor(private http: HttpClient) {}

  loadConfig(): Promise<void> {
    return this.http.get('./assets/app.config.json')
      .toPromise()
      .then(cfg => { 
        this.config = cfg; 
      });
  }

  
  get apiBaseUrl(): string { return this.config?.apiBaseUrl; }
  
  get nameOrg(): string {
    return this.config?.nameOrg; 
  }
  get siteUrl(): string {
    return this.config?.siteUrl;
  }

  get id_org(): number {
    return this.config?.id_org;
  }

  get menu_top(): number {
    return this.config?.menu_top;
  }

  get slider_top(): number {
    return this.config?.slider_top;
  }

  get id_last_news(): number {
    return this.config?.id_last_news;
  }
}