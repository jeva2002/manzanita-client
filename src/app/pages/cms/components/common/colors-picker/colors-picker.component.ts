/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-colors-picker',
  templateUrl: './colors-picker.component.html',
  styleUrls: ['./colors-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorsPickerComponent),
      multi: true,
    },
  ],
})
export class ColorsPickerComponent implements ControlValueAccessor {
  colorsList: string[] = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange = (colorsList: string[]) => {};
  onTouch = () => {};
  isDisabled = false;

  writeValue(value: string[]): void {
    if (value) this.colorsList = [...value];
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  addColor(color: string): void {
    this.colorsList.push(color);
    this.colorsList = [...new Set(this.colorsList)];
    this.onTouch();
    this.onChange(this.colorsList);
  }

  removeColor(color: string): void {
    this.colorsList = this.colorsList.filter(
      (colorInList) => colorInList !== color
    );
    this.onChange(this.colorsList);
  }
}
