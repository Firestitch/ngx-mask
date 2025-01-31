import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { FsExampleModule } from '@firestitch/example';
import { FsFormModule } from '@firestitch/form';
import { FsMessageModule } from '@firestitch/message';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { FsMaskModule } from '../../src/app/mask.module';


import { AppComponent } from './app.component';
import { BlockComponent, HeightComponent, PercentComponent } from './components';
import { FirstExampleComponent } from './components/first-example/first-example.component';
import { NumberComponent } from './components/number/number.component';
import { PatternComponent } from './components/pattern/pattern.component';
import { RegexComponent } from './components/regex/regex.component';
import { SuffixComponent } from './components/suffix/suffix.component';
import { FsMaterialModule } from './material.module';


@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    FsMaskModule.forRoot(),
    BrowserAnimationsModule,
    FsMaterialModule,
    FormsModule,
    FsFormModule,
    FsMessageModule.forRoot(),
    FsExampleModule.forRoot(),
    ToastrModule.forRoot({ preventDuplicates: true }),
  ],
  declarations: [
    AppComponent,
    FirstExampleComponent,
    NumberComponent,
    RegexComponent,
    PatternComponent,
    BlockComponent,
    SuffixComponent,
    PercentComponent,
    HeightComponent,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline',
      },
    },
  ],
})
export class PlaygroundModule {
}
