import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cmp-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  @Input() classes = "picture-rounded ";
  @Input() src = "../../../favicon.ico";
  constructor() { }

  ngOnInit(): void {
  }

}
