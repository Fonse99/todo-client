import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskModel } from 'src/app/model/task.model';

@Component({
  selector: 'cmp-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css'],
})
export class ListItemsComponent {
  @Input() titleList = 'List Name';
  @Input() task = false;
  @Input() data: TaskModel[] = [];
  @Input() eventHandler: Function = (id: number) => {};
  @Output() dataEmitter = new EventEmitter<TaskModel>();

  removeElements(event: Event) {
    let target = (event.target as HTMLElement).innerHTML;

    let element = this.data.findIndex((data) => data.title == target);

    // console.log();
    this.dataEmitter.emit(this.data.splice(element, 1)[0]);
  }
}
