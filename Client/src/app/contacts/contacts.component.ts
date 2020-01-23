import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  data: [];
  page = 1;
  pageSize = 5;
  totalCount: number;
  pageCount: number;
  previous: boolean = false;
  next: boolean = true;

  constructor(private service: ContactService) { 
    this.getContacts();
  }

  ngOnInit() {
   
  }

  getContacts() {
    this.service.getContacts().subscribe(item => {
      this.data = item.data;
      this.totalCount = item.totalCount;
      this.pageCount = item.pageCount;
      if (this.pageCount == 1) {
        this.next = false;
      }
      this.page = item.page;
    });
  }

  getData(pageNumber: number) {
    if (pageNumber >= 1 && pageNumber <= this.pageCount) {
      if (pageNumber == 1) {
        this.previous = false;
      } else {
        if (pageNumber == this.pageCount) {
          this.next = false;
        } else {
          this.previous = true;
          this.next = true;
        }
      }
      this.service.getContacts(pageNumber).subscribe(item => {
        this.data = item.data;
        this.page = item.page;
      })
    }
  }
}
