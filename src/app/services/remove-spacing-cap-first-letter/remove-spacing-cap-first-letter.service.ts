import { Injectable } from '@angular/core';

@Injectable()
export class RemoveSpacingAndCapFirstLetter {
  removeSpacesAndCapEachWord(str: string): string {
    const splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join('');
  }
}
