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
      this.page = item.page;
    });
  }

  public getPage(pageNumber: number) {
    this.service.getContacts(pageNumber).subscribe(item => {
      this.data = item.data;
      this.page = item.page;
    });
  }
}
