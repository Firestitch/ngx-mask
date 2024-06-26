import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'suffix',
  templateUrl: './suffix.component.html',
  styleUrls: ['./suffix.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuffixComponent {

  public value = '';
  public mask = '0\' [00]"';
  
  public changed(e) {
    console.log(e);
  }
}
