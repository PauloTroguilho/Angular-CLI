import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentModule } from './home/home/comment/comment.module'
import { CommentComponent } from './home/home/comment/comment.component';
const routes: Routes = [
    //{ path: '', redirectTo: 'contact', pathMatch: 'full'},
    // { path: 'home/home/comment', redirectTo: 'home/home/comment/comment.module.ts#CommentModule', canActivate:[CommentComponent]},
    // { path: 'home/home/comment', loadChildren: './home/home/comment/comment.module.ts#CommentModule' },
    // { path: 'card', loadChildren: './card-materias/card-materias.module.ts#CardModule' }
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home/home/comment', component: CommentComponent },
  
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
