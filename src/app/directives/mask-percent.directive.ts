import { Directive, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { FsMaskDirective } from './mask.directive';


@Directive({
    selector: '[fsMaskPercent]',
    providers: [{
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FsMaskPercentDirective),
            multi: true,
        }],
    standalone: true,
})
export class FsMaskPercentDirective extends FsMaskDirective implements OnInit {

  @Input() public scale = 0;
  
  @Input() public min = 0;

  public ngOnInit() {
    this.mask = 'num%';
    
    this.blocks = {
      num: {
        mask: Number,
        scale: this.scale,
        min: this.min,
        max: 100,
        radix: '.',
        mapToRadix: [','],
      },
    };

    super.ngOnInit();
  }

}
