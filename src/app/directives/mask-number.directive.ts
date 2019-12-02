import { Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FsMaskDirective } from './mask.directive';


@Directive({
  selector: '[fsMaskNumber]',
  providers: [ {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FsMaskNumberDirective),
    multi: true
  } ]
})
export class FsMaskNumberDirective extends FsMaskDirective {
  public mask = Number;
}
