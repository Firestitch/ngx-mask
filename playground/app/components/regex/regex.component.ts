import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'regex',
  templateUrl: './regex.component.html',
  styleUrls: ['./regex.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegexComponent {

  public regex = '';

  public changed(e) {
    console.log(e);
  }
}
