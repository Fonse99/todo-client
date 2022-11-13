import { FunctionExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CreationState } from 'src/app/reducers/creation.reducer';

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

  constructor(private store: Store<CreationState>) {}

  handleClick() {
    this.handler();
  }
}
