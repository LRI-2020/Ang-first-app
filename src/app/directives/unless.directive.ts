import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
//need to get the condition is an input and nee da method executed when the condition changes --> use the setter of the property for that
//need to have same name that the selector to use it in one of our view (html)
  @Input() set appUnless(condition:boolean){
    if(!condition){
      //if condition is false, we want to render the template (ng-template)
      //need to know what should be render (template Ref) and where it must be render (view container ref)
      // can inject these info through the ctor

      this.vcRef.createEmbeddedView(this.tempRef);
    }
      else{
      this.vcRef.clear();
    }
  }
  constructor(private tempRef:TemplateRef<any>, private vcRef:ViewContainerRef) { }

}
