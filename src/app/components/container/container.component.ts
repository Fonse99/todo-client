import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cmp-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input() classes = "container rounded shadowed";

  constructor() { }

  ngOnInit(): void {
  }

}
