import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cmp-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  @Input() titleList = "List Name"
  @Input() task = false;
  @Input() data = [{title: ''}];
  constructor() { }

  ngOnInit(): void {
  }

}
