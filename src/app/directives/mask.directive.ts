import {
  Directive,
  ElementRef,
  forwardRef,
  OnInit,
  Input,
  HostListener, AfterContentInit
} from '@angular/core';


import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
export class FsMaskDirective implements OnInit, AfterContentInit, ControlValueAccessor {

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

  @HostListener('input') input() {
    setTimeout(() => {
      this._onChange(this._imask.unmaskedValue);
    });
  }

  private _imask;

  public _onTouched = () => {};
  public _onChange = (value: any) => {};

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
  }

  public ngAfterContentInit(): void {
    this._focusHack();
  }

  public writeValue(value: any) {
    this._imask.value = toString(value);
  }

  public registerOnChange(fn: (value: any) => any): void {
    this._onChange = fn
  }

  public registerOnTouched(fn: () => any): void {
    this._onTouched = fn
  }

  /**
   * This issue related with A-T2185
   *
   * After modal dialog opened - material dialog do focus and cursor pointer
   * is before the text. Its somehow related with imask and material.
   * That hack should work for it
   */
  private _focusHack() {
    const focusCallback = () => {
      this._elementRef.nativeElement.setSelectionRange(
        this._elementRef.nativeElement.value.length,
        this._elementRef.nativeElement.value.length
      );
    };

    setTimeout(() => {
      this._elementRef.nativeElement.removeEventListener('focus', focusCallback);
    }, 1000);

    this._elementRef.nativeElement.addEventListener('focus', focusCallback)
  }
}
