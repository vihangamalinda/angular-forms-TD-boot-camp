import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm:NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form:NgForm){
  //   console.log(`Vihngaaaaaaaaaaaaaaaa`,form)
  // }

  onSubmit(){
    console.log(`Vihngaaaaaaaaaaaaaaaa`,this.signupForm.valid);
  }

  // isFormInvalid(){
  //   return this.signupForm.invalid;
  // }
}
