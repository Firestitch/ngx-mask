import { Component } from '@angular/core';

@Component({
  selector: 'suffix',
  templateUrl: 'suffix.component.html',
  styleUrls: [ 'suffix.component.css' ]
})
export class SuffixComponent {

  public value = '';
  public mask = '0\' [00]"';
  
  changed(e) {
    console.log(e);
  }
}
