import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FsFormModule } from '@firestitch/form';
import { MatFormField, MatLabel, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FsMaskCurrencyDirective } from '../../../../src/app/directives/mask-currency.directive';

@Component({
    selector: 'first-example',
    templateUrl: './first-example.component.html',
    styleUrls: ['./first-example.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FormsModule,
        FsFormModule,
        MatFormField,
        MatLabel,
        MatInput,
        FsMaskCurrencyDirective,
        MatHint,
    ],
})
export class FirstExampleComponent {

  public currency = ''; 

  public changed(e) {
    console.log(e);
  }
  
}
