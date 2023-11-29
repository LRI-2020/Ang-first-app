import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBasicDirective]'
})
export class BasicDirectiveDirective implements OnInit {
  //need to access the element on which the directive is applied
  // available through injection in the ctor
  //carefull, angular can be run without a browser, so no DOM in this case. Accessing directly the DOM is then not a best practise
  //Should be access through the renderer to avoid error in case of no DOM (not frequent but still) => also injected through the ctor
  //second way to access the dom safely without using rendered is decorator @HostBinding
  constructor(private elemRef:ElementRef, private renderer:Renderer2) {

  }

  ngOnInit(): void {

    // this.renderer.setStyle(this.elemRef.nativeElement,'background-color','lightblue');
  }

  //Second option to access dom and property on the element on which the directive is applied
  @HostBinding('style.color') color:string='black';
  @HostListener('mouseenter') onHoover(){
    this.renderer.setStyle(this.elemRef.nativeElement,'background-color','blue');
    this.color='white';
  }

  @HostListener('mouseleave') onLeave(){
    this.renderer.setStyle(this.elemRef.nativeElement,'background-color','transparent');
    this.color='black';
  }





}
