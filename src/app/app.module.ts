import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { IniciPauPulidoComponent } from './inici-pau-pulido/inici-pau-pulido.component';
import {FormsModule} from "@angular/forms";
import { InfoPauPulidoComponent } from './info-pau-pulido/info-pau-pulido.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciPauPulidoComponent,
    InfoPauPulidoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
