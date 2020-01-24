import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

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
  @Output() private actualPage = new EventEmitter<number>();
  pages: Array<number> = [];
  previous: boolean = false;
  next: boolean = true;
  constructor() {
  }

  ngOnChanges() {
    this.calculatePages();
  }

  private calculatePages() {
    this.updateButtons();
    this.pages = Array.from({ length: this.pageCount }, (v, k) => k + 1);
  }

  private updateButtons(){
    if (this.pageNumber >= 1 && this.pageNumber <= this.pageCount) {
      if (this.pageNumber == 1) {
        this.previous = false;
        this.next = true;
      } else {
        if (this.pageNumber == this.pageCount) {
          this.next = false;
          this.previous = true;
        } else {
          this.previous = true;
          this.next = true;
        }
      }
    }
  }

  public getPage(page: number) {
    this.actualPage.emit(page);
    this.updateButtons();
  }
}
