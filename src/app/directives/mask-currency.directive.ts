import { Directive, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FsMaskDirective } from './mask.directive';


@Directive({
  selector: '[fsMaskCurrency]',
  providers: [ {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FsMaskCurrencyDirective),
    multi: true
  } ]
})
export class FsMaskCurrencyDirective extends FsMaskDirective {

  public format: 'currency' = 'currency';

}
