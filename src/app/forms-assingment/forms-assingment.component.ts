import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-forms-assingment',
  templateUrl: './forms-assingment.component.html',
  styleUrl: './forms-assingment.component.scss'
})
export class FormsAssingmentComponent {

  @ViewChild('subscriptionForm') subscriptionF:NgForm;
  defaultSubscription ='advanced';
  submitted:boolean=false;

  subscriptionRequest = {
    email:'',
    password:'',
    choice:''
  }
  onSubmit(){
    console.log(this.subscriptionF);
    this.subscriptionRequest.email = this.subscriptionF.value.userData.email;
    this.subscriptionRequest.password = this.subscriptionF.value.userData.password;
    this.subscriptionRequest.choice = this.subscriptionF.value.subscriptionChoice;
    console.log(this.subscriptionRequest)
    this.submitted=true;
    this.subscriptionF.reset();
  }
}
