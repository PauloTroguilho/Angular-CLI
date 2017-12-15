import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentModule } from './home/home/comment/comment.module'
const routes: Routes = [
    //{ path: '', redirectTo: 'contact', pathMatch: 'full'},
    { path: ' ./home/', redirectTo: './home/home/comment/comment.module.ts#CommentModule'},
    { path: 'home/home/comment', loadChildren: './home/home/comment/comment.module.ts#CommentModule' },
    { path: 'card', loadChildren: './card-materias/card-materias.module.ts#CardModule' }
  ];

@NgModule({
  imports: [
    CommentModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule {
}
