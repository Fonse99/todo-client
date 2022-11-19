import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'cmp-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  //Reactive Forms setting
  private isDisable: boolean = false;
  onChange = (_: any) => {};
  onTouch = () => {};

  //Parent configs
  @Input() classes = 'rounded text';
  @Input() type = 'text';
  @Input() placeHolder = 'Example...';
  @Input() value = '';
  @Input() handler = () => {};

  constructor() {}

  getActualValue() {
    this.onChange(this.value);
    this.onTouch();
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisable = isDisabled;
  }
}
