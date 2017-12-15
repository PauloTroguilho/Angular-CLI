import { Component } from '@angular/core';
import {PageEvent} from '@angular/material';

@Component({
    moduleId: module.id,
    selector: 'pagination',
    templateUrl: 'pagination.component.html',
    styleUrls: ['pagination.component.scss']
})
export class PaginationComponent {
    length = 100;
    pageSize = 10;
    pageSizeOptions = [5, 10, 25, 100];
  
    // MatPaginator Output
    pageEvent: PageEvent;
  
    setPageSizeOptions(setPageSizeOptionsInput: string) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
}
