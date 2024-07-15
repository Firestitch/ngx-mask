import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

import { FsMaskDirective } from '../../../../src/app/directives/mask.directive';

@Component({
  selector: 'pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatternComponent {

  @ViewChild(FsMaskDirective)
  public mask: FsMaskDirective;
  
  public pattern = '';

  public changed(e) {
    console.log(e);
  }
}
