import { NgModule } from '@angular/core';
import { RouterModule, Routes, withDebugTracing, withInMemoryScrolling } from '@angular/router';
import { ListPhotosComponent } from './components/list-photos/list-photos.component';
import { ListDocsComponent } from './components/list-docs/list-docs.component';
import { ListPagesComponent } from './components/list-pages/list-pages.component';
import { PageComponent } from './components/page/page.component';
import { PageOneComponent } from './components/page-one/page-one.component';
import { MainComponent } from './components/main/main.component';
import { ContentComponent } from './components/content/content.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UrlPageComponent } from './components/url-page/url-page.component';
import { CardDocComponent } from './components/card-doc/card-doc.component';
import { OnlyofficeComponent } from './components/onlyoffice/onlyoffice.component';
import { SearchComponent } from './components/search/search.component';
import { PubQueryComponent } from './components/pub-query/pub-query.component';
import { VirtReceptionComponent } from './components/virt-reception/virt-reception.component';
import { IndexPhpComponent } from './components/index.php/index.php.component';
import { TabViewComponent } from './components/tab-view/tab-view.component';
import { AccordionComponent } from './components/accordion/accordion.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'contents', component: ContentComponent },
  { path: 'page', component: PageComponent },
  { path: 'page-one', component: PageOneComponent },  
  { path: 'list-pages', component: ListPagesComponent },
  { path: 'list-photos', component: ListPhotosComponent },
  { path: 'list-docs', component: ListDocsComponent },
  { path: 'list-docs', component: ListDocsComponent },
  { path: 'tab-view', component: TabViewComponent},
  { path: 'accordion', component: AccordionComponent},
  { path: 'search', component: SearchComponent },
  //{ path: 'equery', component: EqueryComponent },
  //{ path: 'pub-equery', component: PubEqueryComponent },
  //{ path: 'confirm', component: ConfirmComponent },
  { path: 'only-office', component: OnlyofficeComponent },
  //{ path: 'gallery', component: GalleryComponent },
  { path: 'url-page', component: UrlPageComponent },
  //{ path: 'list-contents', component: ListContentsComponent },
  //{ path: 'form', component: FormComponent },
  { path: 'index.php', component: IndexPhpComponent },
  { path: 'card-doc', component: CardDocComponent },  
  { path: 'pub-query', component: PubQueryComponent},
  { path: 'virt-reception',component: VirtReceptionComponent},
  //{ path: 'maps', component: GoogleMapsComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
