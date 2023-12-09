import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getText'
})
export class GetTextPipe implements PipeTransform {

  transform(value: string | undefined): string {
    return value ? value : "Описание отсутствует";
  }

}
