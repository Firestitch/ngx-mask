import { Component, Input } from '@angular/core';

@Component({
  selector: 'pattern',
  templateUrl: 'pattern.component.html',
  styleUrls: [ 'pattern.component.css' ]
})
export class PatternComponent {
  public pattern = '';

  changed(e) {
    console.log(e);
  }
}
