import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges {
  @Input() pageNumber: number;
  @Input() pageSize: number;
  @Input() totalCount: number;
  @Input() pageCount: number;
  pages: Array<number> = [];
  previous: boolean = false;
  next: boolean = true;
  constructor() {
  }

  ngOnChanges() {
    this.calculatePages();
  }

  calculatePages() {
    if (this.pageNumber >= 1 && this.pageNumber <= this.pageCount) {
      if (this.pageNumber == 1) {
        this.previous = false;
      } else {
        if (this.pageNumber == this.pageCount) {
          this.next = false;
        } else {
          this.previous = true;
          this.next = true;
        }
      }
    }
    this.pages = Array.from({ length: this.pageCount }, (v, k) => k + 1);
  }

  getPreviousPage() {
    console.log("Previous clicked");
  }

  getNextPage() {
    console.log("Next clicked");
  }
}
