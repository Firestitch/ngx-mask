import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FsFormModule } from '@firestitch/form';
import { MatFormField, MatLabel, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FsMaskPercentDirective } from '../../../../src/app/directives/mask-percent.directive';

@Component({
    selector: 'app-percent',
    templateUrl: './percent.component.html',
    styleUrls: ['./percent.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FormsModule,
        FsFormModule,
        MatFormField,
        MatLabel,
        MatInput,
        FsMaskPercentDirective,
        MatHint,
    ],
})
export class PercentComponent {

  public value = '';
  
  public changed(e) {
    console.log(e);
  }
}
