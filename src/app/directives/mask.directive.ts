import {
  AfterContentInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { coerceBooleanProperty } from '@angular/cdk/coercion';

import IMask, { InputMask } from 'imask';
import { toString } from 'lodash-es';


@Directive({
  selector: '[fsMask]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FsMaskDirective),
    multi: true,
  }],
})
export class FsMaskDirective implements OnInit, OnChanges, AfterContentInit, OnDestroy, ControlValueAccessor {

  @Input('fsMask')
  public maskEnabled: boolean | string = true;

  @Input()
  public format: 'currency' | 'number' = 'number';

  @Input()
  public mask: RegExp | Function | string | number | Date | any[];

  @Input()
  public padFractionalZeros = false;

  @Input()
  public thousandsSeparator = ',';

  @Input()
  public radix = '.';

  @Input()
  public scale: number;

  @Input()
  public signed: boolean;

  @Input()
  public min;

  @Input()
  public max;

  @Input()
  public startsWith;

  @Input()
  public lazy;

  @Input()
  public placeholderChar = '_';

  @Input()
  public blocks: any;

  @Input()
  public maskOptions = {};

  public _onTouched: () => void;
  public _onChange: (value: any) => void;

  private _imask;

  constructor(
    private _elementRef: ElementRef,
  ) { }

  @HostListener('blur')
  public blur() {
    setTimeout(() => {
      this._onTouched();
    });
  }

  @HostListener('input')
  public input() {
    setTimeout(() => {
      this._onChange(this._controlValue);
    });
  }

  public get imask(): InputMask<any> {
    return this._imask;
  }

  private get _controlValue(): unknown {
    return this.maskEnabled
      ? this._imask.unmaskedValue
      : this._elementRef.nativeElement.value;
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.maskEnabled) {
      this.maskEnabled = coerceBooleanProperty(this.maskEnabled);

      if (
        !changes.maskEnabled.firstChange
        && changes.maskEnabled.previousValue !== changes.maskEnabled.currentValue
      ) {
        this._updateMaskState();
      }
    }
  }

  public ngOnInit() {
    if (this.format === 'currency') {
      this.mask = '$num';
      this.padFractionalZeros = true;
      this.signed = this.signed ?? false;
      this.scale = this.scale ?? 2;
      this.blocks = {
        num: {
          mask: Number,
          thousandsSeparator: ',',
          radix: '.',
          mapToRadix: [','],
        },
      };
    }

    this._updateMaskState();
  }

  public ngAfterContentInit(): void {
    this._focusHack();
  }

  public ngOnDestroy(): void {
    this._destroyMask();
  }

  public writeValue(value: any) {
    if (this._imask) {
      this._imask.value = toString(value);
    }
  }

  public registerOnChange(fn: (value: any) => any): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: () => any): void {
    this._onTouched = fn;
  }

  private _updateMaskState(): void {
    if (coerceBooleanProperty(this.maskEnabled)) {
      this._initMask();
    } else {
      this._destroyMask();
    }
  }

  private _initMask(): void {
    if (!!this._imask) {
      return;
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
      blocks: this.blocks,
      max: this.max,
      placeholderChar: this.placeholderChar,
      startsWith: this.startsWith,
      ...this.maskOptions,
    };

    this._imask = IMask(this._elementRef.nativeElement, maskOptions);
  }

  private _destroyMask(): void {
    if (!!this._imask) {
      this._imask.destroy();
      this._imask = null;
    }
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
        this._elementRef.nativeElement.value.length,
      );
    };

    setTimeout(() => {
      this._elementRef.nativeElement.removeEventListener('focus', focusCallback);
    }, 1000);

    this._elementRef.nativeElement.addEventListener('focus', focusCallback);
  }
}
