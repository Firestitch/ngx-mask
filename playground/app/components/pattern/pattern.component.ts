import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

import { FsFormModule } from '@firestitch/form';

import { FsMaskDirective } from '../../../../src/app/directives/mask.directive';

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
  
  public pattern = '77';

  public changed(e) {
    console.log(e);
  }
}
