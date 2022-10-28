import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsMaskDirective } from './directives/mask.directive';
import { FsMaskNumberDirective } from './directives/mask-number.directive';
import { FsMaskRexExpDirective } from './directives/mask-reg-exp.directive';
import { FsMaskCurrencyDirective } from './directives/mask-currency.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FsMaskDirective,
    FsMaskNumberDirective,
    FsMaskRexExpDirective,
    FsMaskCurrencyDirective
  ],
  declarations: [
    FsMaskDirective,
    FsMaskNumberDirective,
    FsMaskRexExpDirective,
    FsMaskCurrencyDirective,
  ],
})
export class FsMaskModule {
  static forRoot(): ModuleWithProviders<FsMaskModule> {
    return {
      ngModule: FsMaskModule
    };
  }
}
