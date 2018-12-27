import { Directive, HostBinding, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[highlited]',
  exportAs: 'hl'
})
export class HighlitedDirective {
  @Input('highlited')
  isHighlited = false;


  constructor() {
    console.log('Directive Created')
   }

   @HostBinding('class.boxshadow')
  get cssClasses(){
     return this.isHighlited;
   }

   @HostBinding('attr.disable')
   get isDisable(){
      return true;  
    }

    @Output()
    toogleHighlite = new EventEmitter();
  
    @HostListener('mouseover', ['$event'])
    mouseOver(){
      this.isHighlited = true
      this.toogleHighlite.emit(this.isHighlited)
    }

    @HostListener('mouseleave')
    mouseLeave(){
      this.isHighlited = false
      this.toogleHighlite.emit(this.isHighlited)
    }
    toggle(){
      this.isHighlited = !this.isHighlited
      this.toogleHighlite.emit(this.isHighlited)
    }

} 
