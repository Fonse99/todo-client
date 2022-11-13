import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cmp-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() task = false;
  @Input() value = '';
  constructor() { }

  ngOnInit(): void {
  }

}
