import { Component } from '@angular/core';

@Component({
  selector: 'number',
  templateUrl: 'number.component.html',
  styleUrls: [ 'number.component.css' ]
})
export class NumberComponent {
  public number = '';

  changed(e) {
    console.log(e);
  }
}
