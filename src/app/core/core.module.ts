import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { TabComponent } from './components/tab/tab.component';
import {AppService} from './services/app.service';
import { NewsComponent } from './components/news/news.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    LayoutComponent
  ],
  providers: [ AppService],
  declarations: [HomeComponent, AboutComponent, PageNotFoundComponent, LayoutComponent, NavbarComponent, TabComponent, NewsComponent],
})
export class CoreModule { }
