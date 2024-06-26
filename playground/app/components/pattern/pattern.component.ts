import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatternComponent {
  
  public pattern = '';

  public changed(e) {
    console.log(e);
  }
}
