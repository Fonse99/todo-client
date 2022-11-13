import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cmp-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent implements OnInit {

  @Input() title = "Title"
  @Input() classes = "";
  constructor() { }

  ngOnInit(): void {
  }

}
