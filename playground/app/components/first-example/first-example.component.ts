import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'first-example',
  templateUrl: './first-example.component.html',
  styleUrls: ['./first-example.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstExampleComponent {

  public currency = '';

  public changed(e) {
    console.log(e);
  }
}
