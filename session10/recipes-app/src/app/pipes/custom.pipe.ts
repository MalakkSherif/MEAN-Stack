import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let newValue = value > 30 ? 'Goode recipe' : 'Need more reviews'
    return newValue;
  }

}
