import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormatter',
  standalone: true
})
export class TimeFormatterPipe implements PipeTransform {

  transform(value: number): string {
    return `${value / 60}h ${value % 60}m`;
  }

}
