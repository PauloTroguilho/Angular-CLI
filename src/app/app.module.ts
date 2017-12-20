import { CommentModule } from './home/home/comment/comment.module';
import { HttpModule } from '@angular/http';

import { SimpleFormComponent } from './SimpleForm/simple-form/simple-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterLink, RouterModule } from '@angular/router';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';//efeitos forms
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'  ;
import { CheckboxConfigurableExample } from './checkbox-configurable-example';

import { SidebarComponent } from './home/home/homeincludes/sidebar/sidebar.component';
import { TopbarComponent } from './home/home/homeincludes/topbar/topbar.component';
import {CommentComponent} from './home/home/comment/comment.component'

import {routes} from './app.routes';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatToolbar,
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import { PaginationComponent } from './pagination/pagination/pagination.component';
import { CardMateriasComponent } from './home/home/cardMaterias/cardMaterias.component';


@NgModule({
  declarations: [
    PaginationComponent,
    CheckboxConfigurableExample,
    SimpleFormComponent,
    CardMateriasComponent,
    SidebarComponent,
    TopbarComponent,
    CommentComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(routes),
    [BrowserAnimationsModule],
    [NoopAnimationsModule],
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
],
  exports: [MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule],

  providers: [],
  bootstrap: [AppComponent]
})
 


export class AppModule { }
export class PizzaPartyAppModule { }
export class MyOwnCustomMaterialModule { }

