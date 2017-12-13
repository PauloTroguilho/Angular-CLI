import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'  ;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    [AlertModule.forRoot(),],
    [BrowserAnimationsModule],
    [NoopAnimationsModule],
    [MatButtonModule, MatCheckboxModule],

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
export class MyOwnCustomMaterialModule { }
