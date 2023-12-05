import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-reactive-assingment',
  templateUrl: './reactive-assingment.component.html',
  styleUrl: './reactive-assingment.component.scss'
})
export class ReactiveAssingmentComponent implements OnInit{

  projectForm:FormGroup
  forbiddenProjectNames=["test"];

  ngOnInit(): void {

    this.projectForm = new FormGroup<any>({

      'projectname': new FormControl(null, Validators.required, this.forbiddenNames.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('critical')

    })
  }

  forbiddenNames(control:FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
          resolve({ nameIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onSubmit(){
    console.log(this.projectForm);

  }


}
