import { Component, Input } from '@angular/core';

@Component({
  selector: 'regex',
  templateUrl: 'regex.component.html',
  styleUrls: [ 'regex.component.css' ]
})
export class RegexComponent {
  public regex = '';

  changed(e) {
    console.log(e);
  }
}
