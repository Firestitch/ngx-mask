import { Component } from '@angular/core';

@Component({
  selector: 'first-example',
  templateUrl: 'first-example.component.html',
  styleUrls: [ 'first-example.component.css' ]
})
export class FirstExampleComponent {
  public currency = '';

  constructor() {
  }

  changed(e) {
    console.log(e);
  }
}
