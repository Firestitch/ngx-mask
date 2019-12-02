import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsMaskDirective } from './directives/mask.directive';
import { FsMaskNumberDirective } from './directives/mask-number.directive';
import { FsMaskRexExpDirective } from './directives/mask-reg-exp.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FsMaskDirective,
    FsMaskNumberDirective,
    FsMaskRexExpDirective
  ],
  declarations: [
    FsMaskDirective,
    FsMaskNumberDirective,
    FsMaskRexExpDirective
  ],
})
export class FsMaskModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsMaskModule
    };
  }
}
