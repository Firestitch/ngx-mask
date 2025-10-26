import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

import { FsMaskDirective } from '../../../../src/app/directives/mask.directive';
import { FormsModule } from '@angular/forms';
import { FsFormModule } from '@firestitch/form';
import { MatFormField, MatLabel, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
    selector: 'pattern',
    templateUrl: './pattern.component.html',
    styleUrls: ['./pattern.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FormsModule,
        FsFormModule,
        MatFormField,
        MatLabel,
        MatInput,
        FsMaskDirective,
        MatHint,
    ],
})
export class PatternComponent {

  @ViewChild(FsMaskDirective)
  public mask: FsMaskDirective;
  
  public pattern = '';

  public changed(e) {
    console.log(e);
  }
}
