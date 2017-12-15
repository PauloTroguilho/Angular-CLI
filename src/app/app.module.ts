
import { SimpleFormComponent } from './SimpleForm/simple-form/simple-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'  ;
import { CheckboxConfigurableExample } from './checkbox-configurable-example';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';//efeitos forms
import { SidebarComponent } from './home/home/homeincludes/sidebar/sidebar.component';
import { TopbarComponent } from './home/home/homeincludes/topbar/topbar.component';
import {CommentComponent} from './home/home/comment/comment.component'

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
import { CardMateriasComponent } from './card-materias/card-materias.component';


@NgModule({
  declarations: [
    PaginationComponent,
    CheckboxConfigurableExample,
    SimpleFormComponent,
    CardMateriasComponent,
    SidebarComponent,
    TopbarComponent,
    CommentComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    [AlertModule.forRoot(),],
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
    CUSTOM_ELEMENTS_SCHEMA
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
