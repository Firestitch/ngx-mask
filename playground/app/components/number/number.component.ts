import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FsFormModule } from '@firestitch/form';
import { MatFormField, MatLabel, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FsMaskNumberDirective } from '../../../../src/app/directives/mask-number.directive';

@Component({
    selector: 'number',
    templateUrl: './number.component.html',
    styleUrls: ['./number.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FormsModule,
        FsFormModule,
        MatFormField,
        MatLabel,
        MatInput,
        FsMaskNumberDirective,
        MatHint,
    ],
})
export class NumberComponent {

  public value = '';
  public valueBlur = '';

  public changed(e) {
    console.log('Changed', e);
  }
}
