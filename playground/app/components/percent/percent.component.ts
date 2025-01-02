import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-percent',
  templateUrl: './percent.component.html',
  styleUrls: ['./percent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PercentComponent {

  public value = '';
  
  public changed(e) {
    console.log(e);
  }
}
