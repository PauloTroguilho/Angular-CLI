import { CardMateriasComponent } from './home/home/cardMaterias/cardMaterias.component';


import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, provideRoutes } from '@angular/router';
import { CommentModule } from './home/home/comment/comment.module'
import { CommentComponent } from './home/home/comment/comment.component';
// const routes: Routes = [
//     //{ path: '', redirectTo: 'contact', pathMatch: 'full'},
//     // { path: 'home/home/comment', redirectTo: 'home/home/comment/comment.module.ts#CommentModule', canActivate:[CommentComponent]},
//     // { path: 'home/home/comment', loadChildren: './home/home/comment/comment.module.ts#CommentModule' },
//     // { path: 'card', loadChildren: './card-materias/card-materias.module.ts#CardModule' }
//     { path: '', redirectTo: 'home/comment', pathMatch: 'full' }
  
//   ];

export const routes: Routes = [
  { path: 'home/comment', component: CommentComponent },
  { path: 'home/cardMaterias', component: CardMateriasComponent }
];