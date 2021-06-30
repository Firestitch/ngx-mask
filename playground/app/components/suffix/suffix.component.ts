import { Component } from '@angular/core';

@Component({
  selector: 'suffix',
  templateUrl: 'suffix.component.html',
  styleUrls: [ 'suffix.component.css' ]
})
export class SuffixComponent {
  public value = '';

  changed(e) {
    console.log(e);
  }
}
