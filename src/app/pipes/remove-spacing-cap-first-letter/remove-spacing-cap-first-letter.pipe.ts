import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpacingCapFirstLetter',
})
export class RemoveSpacingCapFirstLetterPipe implements PipeTransform {
  transform(value: string): string {
    const splitStr = value.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join('');
  }
}
