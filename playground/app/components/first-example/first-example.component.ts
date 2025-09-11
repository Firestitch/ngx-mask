import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'first-example',
  templateUrl: './first-example.component.html',
  styleUrls: ['./first-example.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstExampleComponent {

  public currency = ''; 
  
  public maskOptions = {
    mask: 'NX{0000}', // N + first letter (required) + up to 4 optional alphanumeric
    lazy: false, // Always show 'N' and placeholders (e.g., "Na____")
    placeholderChar: ' ', // Use '_' for unfilled positions
    definitions: {
      'X': /[1-9]/,
      '0': /[0-9A-Za-hj-np-z]/, // Subsequent: alphanumeric (0-9 + letters, no I/O)
    },
    prepare: (value: string): string => {
      return value.toUpperCase();
    },
  };


  public changed(e) {
    console.log(e);
  }
  
}
