import { Component, OnInit, Inject, forwardRef, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.scss']
})
  
export class SidebarComponent implements OnInit {
   

    ngOnInit() {
        debugger;
        var Menus = [
            {name : "home", route : "/",cssIcon : ""},
            {name : "comment", route : "/comment",cssIcon : ""},
            {name : "Volvo XC90", route : "/black",cssIcon : ""}
        ];
      
    }
    routeLink(item) {
		if (item.route == "/home")
        {
            
        }
        //this.title = "Minha Agenda";
	}
    
   
}
