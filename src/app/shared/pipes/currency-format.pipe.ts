import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat',
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: string): string {
    return (
      '$ ' +
      value
        .split('')
        .reverse()
        .map((number, i) => {
          if ((i + 1) % 3 === 0 && i !== value.length - 1) return '.' + number;
          return number;
        })
        .reverse()
        .join('')
    );
  }
}
