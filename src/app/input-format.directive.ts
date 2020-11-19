import { Directive,HostListener,ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[InputFormat]'
})
export class InputFormatDirective {

  constructor(private ref:ElementRef) { }
@HostListener('focus') onFocus()
{
  if(this.ref.nativeElement.value !='')
  {
    window.alert(this.ref.nativeElement.value);
  }
  
}
@Input('format') format :string
@HostListener('blur') onEnter()
{
let value: string=this.ref.nativeElement.value;
if(this.format=='toUpperCase')
this.ref.nativeElement.value=value.toUpperCase();
else
this.ref.nativeElement.value=value.toLowerCase();
}
}
