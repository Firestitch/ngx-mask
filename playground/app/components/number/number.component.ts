import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberComponent {

  public value = '';

  public changed(e) {
    console.log(e);
  }
}
