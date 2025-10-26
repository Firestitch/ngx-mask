import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import IMask from 'imask';
import { FormsModule } from '@angular/forms';
import { FsFormModule } from '@firestitch/form';
import { MatFormField, MatLabel, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FsMaskDirective } from '../../../../src/app/directives/mask.directive';


@Component({
    selector: 'app-blocks',
    templateUrl: './blocks.component.html',
    styleUrls: ['./blocks.component.css'],
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
export class BlockComponent implements OnInit {
  
  public date = '';
  public blocks = {};

  public changed(e) {
    console.log(e);
  }

  public ngOnInit() {
    this.blocks = {
      MM: {        
        mask: IMask.MaskedRange,
        from: 1,
        to: 12,
        placeholderChar: 'M',
      },
      YY: {
        mask: '00',
        placeholderChar: 'Y',
      },
    };
  }
}
