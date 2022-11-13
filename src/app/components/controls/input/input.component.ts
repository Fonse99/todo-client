import { FunctionExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cmp-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() classes = 'rounded text';
  @Input() type = 'text';
  @Input() placeHolder = 'Example...';
  @Input() value = '';
  @Input() handler = () => {};

  handleClick() {
    this.handler();
  }
}
