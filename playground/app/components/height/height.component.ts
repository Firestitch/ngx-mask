import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FsFormModule } from '@firestitch/form';
import { MatFormField, MatLabel, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FsMaskDirective } from '../../../../src/app/directives/mask.directive';

@Component({
    selector: 'app-height',
    templateUrl: './height.component.html',
    styleUrls: ['./height.component.css'],
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
export class HeightComponent {

  public value = '';
  public mask = '0\' [00]"';
  
  public changed(e) {
    console.log(e);
  }
}
