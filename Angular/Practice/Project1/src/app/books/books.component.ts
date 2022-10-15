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
  title = "My name is Abhay"

  constructor() { }

  myFunc(){
    alert("You just learnt Event binding")
  }

  ngOnInit(): void {
  }

}
