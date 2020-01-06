import {
  Directive,
  ElementRef,
  forwardRef,
  OnInit,
  Input
} from '@angular/core';


import { NG_VALUE_ACCESSOR } from '@angular/forms';

import IMask from 'imask';
import { toString } from 'lodash-es';


@Directive({
  selector: '[fsMask]',
  providers: [ {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FsMaskDirective),
    multi: true
  } ]
})
export class FsMaskDirective implements OnInit {

  @Input() format: 'currency';
  @Input() mask: RegExp | Function | String | Number | Date;
  @Input() padFractionalZeros;
  @Input() thousandsSeparator = ',';
  @Input() radix = '.';
  @Input() scale;
  @Input() signed = true;
  @Input() min;
  @Input() max;
  @Input() startsWith;
  @Input() lazy;

  private _imask;

  _onTouched = () => {};
  _onChange = (value: any) => {};

  registerOnChange(fn: (value: any) => any): void {
    this._onChange = fn
  }

  registerOnTouched(fn: () => any): void {
    this._onTouched = fn
  }

  constructor(private _elementRef: ElementRef) {}

  public ngOnInit() {

    if (this.format === 'currency') {
      this.mask = Number;
      this.scale = 2;
      this.signed = false;
      this.padFractionalZeros = true;
    }

    const maskOptions: any = {
      mask: this.mask,
      radix: this.radix,
      thousandsSeparator: this.thousandsSeparator,
      padFractionalZeros: this.padFractionalZeros,
      scale: this.scale,
      signed: this.signed,
      min: this.min,
      lazy: this.lazy,
      max: this.max,
      startsWith: this.startsWith
    };

    this._imask = IMask(this._elementRef.nativeElement, maskOptions);
    this._imask.on('accept', () => {
      console.log(this._imask.typedValue);
      this._onChange(this._imask.typedValue);
    });
  }

  private writeValue(value: any) {
    this._imask.value = toString(value);
  }
}
