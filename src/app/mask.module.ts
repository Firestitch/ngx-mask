import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { FsMaskDirective } from './directives/mask.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FsMaskDirective,
  ],
  declarations: [
    FsMaskDirective,
  ],
})
export class FsMaskModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsMaskModule
    };
  }
}
