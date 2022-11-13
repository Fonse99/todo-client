import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list = []
  completed = []
  showAddingElement = false;
  constructor() { }

  ngOnInit(): void {
  }

 handleAddNewElement(){
    this.showAddingElement = true
    console.log(this.showAddingElement)
  }

}
