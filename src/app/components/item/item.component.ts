import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() task = false;
  @Input() value = '';
  @Input() classes = 'item-container rounded';
  @Input() checkHandler = () => {};
}
