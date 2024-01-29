import { Directive, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { FsMaskDirective } from './mask.directive';


@Directive({
  selector: '[fsMaskRegExp]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FsMaskRexExpDirective),
    multi: true,
  }],
})
export class FsMaskRexExpDirective extends FsMaskDirective {

  @Input('mask') public set setMask(value) {
    const matches = value.match(/^\/(.*)\/([a-z]*)$/);
    this.mask = new RegExp(matches[1], matches[2]);
  }
}
