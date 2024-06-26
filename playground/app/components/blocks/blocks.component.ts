import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import IMask from 'imask';


@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,  
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
