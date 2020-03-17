import { Directive, ElementRef, HostListener, AfterViewInit, AfterViewChecked, Input } from '@angular/core';

@Directive({
  selector: '[appProvidefocus]'
})
export class ProvidefocusDirective  {

  @Input('focushere') focushere:boolean; 
  setfocus:boolean;
  constructor(private el: ElementRef) { }

  @HostListener('mouseover') onClick(){
   this.el.nativeElement.focus();
   console.log("Directives");
  }
}
