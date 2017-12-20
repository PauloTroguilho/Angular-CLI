// Angular Imports
import { NgModule } from '@angular/core';


// This Module's Components
import { SidebarComponent } from './sidebar.component';
import { RouterModule } from '@angular/router/src/router_module';

@NgModule({
    imports: [
        RouterModule

    ],
    declarations: [
        SidebarComponent,
    ],
    exports: [
        SidebarComponent,
    ]
})
export class SidebarModule {

}
