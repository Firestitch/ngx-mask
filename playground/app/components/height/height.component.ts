import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-height',
  templateUrl: './height.component.html',
  styleUrls: ['./height.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeightComponent {

  public value = '';
  public mask = '0\' [00]"';
  
  public changed(e) {
    console.log(e);
  }
}
