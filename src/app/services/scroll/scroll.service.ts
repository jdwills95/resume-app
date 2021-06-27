import { Injectable } from '@angular/core';

@Injectable()
export class ScrollService {
  public disable(): void {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = () => {
      window.scrollTo(x, y);
    };
  }

  public enable(): void {
    window.onscroll = () => {};
  }
}
