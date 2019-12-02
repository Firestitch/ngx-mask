import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FsMaskModule } from '../../src/app/mask.module';
import { FsExampleModule } from '@firestitch/example';
import { FsFormModule } from '@firestitch/form';
import { FsMessageModule } from '@firestitch/message';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FsMaterialModule } from './material.module';
import { FirstExampleComponent } from './components/first-example/first-example.component';
import { NumberComponent } from './components/number/number.component';
import { RegexComponent } from './components/regex/regex.component';
import { PatternComponent } from './components/pattern/pattern.component';


@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FsMaskModule.forRoot(),
    BrowserAnimationsModule,
    FsMaterialModule,
    FormsModule,
    FsFormModule,
    FsMessageModule.forRoot(),
    FsExampleModule.forRoot(),
    ToastrModule.forRoot({ preventDuplicates: true }),
  ],
  entryComponents: [],
  declarations: [
    AppComponent,
    FirstExampleComponent,
    NumberComponent,
    RegexComponent,
    PatternComponent
  ]
})
export class PlaygroundModule {
}
