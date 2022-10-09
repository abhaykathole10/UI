import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  fname:string = "Abhay"
  lname:string = "Kathole"

  isWorking: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
