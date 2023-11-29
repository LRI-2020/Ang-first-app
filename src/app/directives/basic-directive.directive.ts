import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBasicDirective]'
})
export class BasicDirectiveDirective implements OnInit {
//need to access the element on which the directive is applied
  // available through injection
  //carefull, angular can be run without a browser, so no DOM in this case. Acessing directly the DOM is then not a best practise
  //Should be access through the renderer to avoid error in case of no DOM (not frequent but still)
  constructor(private elemRef:ElementRef, private renderer:Renderer2) {

  }

  ngOnInit(): void {

    // this.renderer.setStyle(this.elemRef.nativeElement,'background-color','lightblue');
  }

  @HostListener('mouseenter') onHoover(){
    this.renderer.setStyle(this.elemRef.nativeElement,'background-color','lightblue');
  }

  @HostListener('mouseleave') onLeave(){
    this.renderer.setStyle(this.elemRef.nativeElement,'background-color','transparent');
  }



}
