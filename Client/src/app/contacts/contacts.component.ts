import { Component, OnInit } from '@angular/core';
import PageList from '../services/page-list';
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
  collectionSize: number;
  pageCount: number;

  constructor(private service: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.service.getContacts().subscribe(item => {
      this.data = item.data;
      this.collectionSize = item.totalCount;
      this.pageCount = item.pageCount;
      this.page = item.page;
      console.log(item);
    });
  }

  getData(pageNumber: number) {
    if(pageNumber >= 1 && pageNumber <= this.pageCount){
      this.service.getContacts(pageNumber).subscribe(item=>{
        this.data = item.data;
        this.page = item.page;
      })
    }
  }
}
