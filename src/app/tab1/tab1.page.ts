import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  onSelect(event: MouseEvent): void {
    event.stopImmediatePropagation();

    console.log('Select clicked:', event);

    if (event instanceof PointerEvent && event.pointerId === -1) {
      return;
    }

    // Code beyond this point will only run once
  }

}
