import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FsFormModule } from '@firestitch/form';
import { MatFormField, MatLabel, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FsMaskRexExpDirective } from '../../../../src/app/directives/mask-reg-exp.directive';

@Component({
    selector: 'regex',
    templateUrl: './regex.component.html',
    styleUrls: ['./regex.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FormsModule,
        FsFormModule,
        MatFormField,
        MatLabel,
        MatInput,
        FsMaskRexExpDirective,
        MatHint,
    ],
})
export class RegexComponent {

  public regex = '';

  public changed(e) {
    console.log(e);
  }
}
