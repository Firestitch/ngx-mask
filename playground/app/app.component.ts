import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { FsExampleModule } from '@firestitch/example';
import { FirstExampleComponent } from './components/first-example/first-example.component';
import { NumberComponent } from './components/number/number.component';
import { RegexComponent } from './components/regex/regex.component';
import { PatternComponent } from './components/pattern/pattern.component';
import { SuffixComponent } from './components/suffix/suffix.component';
import { HeightComponent } from './components/height/height.component';
import { PercentComponent } from './components/percent/percent.component';
import { BlockComponent } from './components/blocks/blocks.component';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    standalone: true,
    imports: [FsExampleModule, FirstExampleComponent, NumberComponent, RegexComponent, PatternComponent, SuffixComponent, HeightComponent, PercentComponent, BlockComponent]
})
export class AppComponent {
  public config = environment;
}
