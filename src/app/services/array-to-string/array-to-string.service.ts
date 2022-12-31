import { Injectable } from '@angular/core';

@Injectable()
export class ArrayToStringService {
  arrayToString(arrayOfStrings: string[]): string {
    let stringReturn = '';
    arrayOfStrings.forEach((arrayPart: string, index) => {
      if (index !== 0) {
        stringReturn = stringReturn + ', ' + arrayPart;
      } else {
        stringReturn = arrayPart;
      }
    });
    return stringReturn;
  }
}
