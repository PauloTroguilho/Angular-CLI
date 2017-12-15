import { PaginationComponent } from './pagination/pagination/pagination.component';
import { SimpleFormComponent } from './SimpleForm/simple-form/simple-form.component';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {CheckboxConfigurableExample} from './checkbox-configurable-example';
import {TopbarComponent} from './home/home/homeincludes/topbar/topbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CardMateriasComponent} from './card-materias/card-materias.component'
import {CommentComponent} from './home/home/comment/comment.component'
import {SidebarComponent} from './home/home/homeincludes/sidebar/sidebar.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

