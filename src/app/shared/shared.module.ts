import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TinymceComponent } from './components/tinymce/tinymce.component';
import {ClipboardModule} from 'ngx-clipboard';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    ClipboardModule
  ],
  exports: [
    FlexLayoutModule,
    MaterialModule,
    TinymceComponent,
  ],
  declarations: [TinymceComponent]
})
export class SharedModule { }
