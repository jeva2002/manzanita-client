/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-sizes-picker',
  templateUrl: './sizes-picker.component.html',
  styleUrls: ['./sizes-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SizesPickerComponent),
      multi: true,
    },
  ],
})
export class SizesPickerComponent implements ControlValueAccessor {
  sizesList: string[] = [
    '0-3 meses',
    '3-6 meses',
    '6-9 meses',
    '9-12 meses',
    '1-2 años',
    '2+ años',
  ];
  selectedSizes: string[] = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange = (colorsList: string[]) => {};
  onTouch = () => {};
  isDisabled = false;

  writeValue(value: string[]): void {
    if (value) {
      this.selectedSizes = value;
    }
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

  setSizes(sizes: string[]): void {
    this.selectedSizes = sizes;
    this.onChange(this.selectedSizes);
  }
}
