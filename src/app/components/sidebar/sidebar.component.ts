import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cmp-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  list = [
    {title: "Tareas de programación"},
    {title: "Tareas de Bases de datos"},
  ]

  groups = [
    {
      title: "Universidad",
      lists: [ this.list ]
    }
  ]

  @Input() classes = "sidebar display-main"

  constructor() { }

  ngOnInit(): void {
  }

}
