import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { FsMaskCurrencyDirective } from './directives/mask-currency.directive';
import { FsMaskNumberDirective } from './directives/mask-number.directive';
import { FsMaskPercentDirective } from './directives/mask-percent.directive';
import { FsMaskRexExpDirective } from './directives/mask-reg-exp.directive';
import { FsMaskDirective } from './directives/mask.directive';


@NgModule({
    imports: [
        CommonModule,
        FsMaskDirective,
        FsMaskNumberDirective,
        FsMaskRexExpDirective,
        FsMaskCurrencyDirective,
        FsMaskPercentDirective,
    ],
    exports: [
        FsMaskDirective,
        FsMaskNumberDirective,
        FsMaskRexExpDirective,
        FsMaskCurrencyDirective,
        FsMaskPercentDirective,
    ],
})
export class FsMaskModule {
  public static forRoot(): ModuleWithProviders<FsMaskModule> {
    return {
      ngModule: FsMaskModule,
    };
  }
}
