import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MenubarModule } from 'primeng/menubar'; 
import { MegaMenuModule } from "primeng/megamenu"; 
import { PanelMenuModule } from 'primeng/panelmenu';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PaginatorModule } from 'primeng/paginator'; 
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { DataViewModule } from 'primeng/dataview';
import { TreeModule } from 'primeng/tree'; 
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';
import { CaptchaModule } from 'primeng/captcha'; 
import { TabViewModule } from 'primeng/tabview';
import { SlideMenuModule } from 'primeng/slidemenu';
import { MessagesModule } from 'primeng/messages'; 
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from "primeng/inputtextarea"; 
import { DocumentEditorModule } from '@onlyoffice/document-editor-angular';
import { BlockUIModule } from "primeng/blockui"; 
import { AccordionModule } from "primeng/accordion";


import { GalleriaModule } from 'primeng/galleria'; 
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListPagesComponent } from './components/list-pages/list-pages.component';
import { ListDocsComponent } from './components/list-docs/list-docs.component';
import { ListPhotosComponent } from './components/list-photos/list-photos.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { PanelmenuComponent } from './components/panelmenu/panelmenu.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CarouselComponent } from './components/carousel/carousel.component';

import { TreeComponent } from './components/tree/tree.component';
import { PageComponent } from './components/page/page.component';
import { MainComponent } from './components/main/main.component';
import { ContentComponent } from './components/content/content.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SanitizedHtmlPipe } from './pipes/sanitized-html.pipe';
import { ChipsComponent } from './components/chips/chips.component';
import { UrlPageComponent } from './components/url-page/url-page.component';
import { PageOneComponent } from './components/page-one/page-one.component';
import { LastAnonsComponent } from './components/last-anons/last-anons.component';
import { LastDocsComponent } from './components/last-docs/last-docs.component';
import { OnlyofficeComponent } from './components/onlyoffice/onlyoffice.component';
import { LastNewsComponent } from './components/last-news/last-news.component';
import { ListAnonsComponent } from './components/list-anons/list-anons.component';
import { LastPhotosComponent } from './components/last-photos/last-photos.component';
import { LastVideosComponent } from './components/last-videos/last-videos.component';
import { ListVideosComponent } from './components/list-videos/list-videos.component';
import { MainNewsComponent } from './components/main-news/main-news.component';
import { CardDocComponent } from './components/card-doc/card-doc.component';
import { MegamenuComponent } from './components/megamenu/megamenu.component';
import { SearchComponent } from './components/search/search.component';
import { SlideMenuComponent } from './components/slide-menu/slide-menu.component';
import { TabViewComponent } from './components/tab-view/tab-view.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { MainSearchComponent } from './components/main-search/main-search.component';
import { MainPhotosComponent } from './components/main-photos/main-photos.component';
import { MainVideosComponent } from './components/main-videos/main-videos.component';
import { MainMediaComponent } from './components/main-media/main-media.component';
import { VirtReceptionComponent } from './components/virt-reception/virt-reception.component';
import { PubQueryComponent } from './components/pub-query/pub-query.component';
import { IndexPhpComponent } from './components/index.php/index.php.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    ListPagesComponent,
    ListDocsComponent,
    ListPhotosComponent,
    MenubarComponent,
    PanelmenuComponent,
    BreadcrumbComponent,
    CarouselComponent,
    TreeComponent,
    PageComponent,
    MainComponent,
    ContentComponent,
    NotFoundComponent,
    SanitizedHtmlPipe,
    ChipsComponent,
    UrlPageComponent,
    PageOneComponent,
    LastAnonsComponent,
    LastDocsComponent,
    OnlyofficeComponent,
    LastNewsComponent,
    ListAnonsComponent,
    LastPhotosComponent,
    LastVideosComponent,
    ListVideosComponent,
    MainNewsComponent,
    CardDocComponent,
    MegamenuComponent,
    SearchComponent,
    SlideMenuComponent,
    TabViewComponent,
    AccordionComponent,
    MainSearchComponent,
    MainPhotosComponent,
    MainVideosComponent,
    MainMediaComponent,
    VirtReceptionComponent,
    PubQueryComponent,
    IndexPhpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    MenubarModule,
    PanelMenuModule,
    CarouselModule,
    ButtonModule,
    TableModule,
    BreadcrumbModule,
    PaginatorModule,
    CalendarModule,
    InputTextModule,
    DataViewModule,
    TreeModule,
    RadioButtonModule,
    DialogModule,
    CaptchaModule,
    GalleriaModule,
    DocumentEditorModule,
    MegaMenuModule,
    TabViewModule,
    SlideMenuModule,
    MessagesModule,
    InputTextareaModule,
    CardModule,
    AccordionModule,
    BlockUIModule
],
exports: [
  SanitizedHtmlPipe
], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
