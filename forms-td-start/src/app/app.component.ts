import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm:NgForm;

  defaultQuestion = 'pet';
  answer='';
  genders=['male','female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form:NgForm){
  //   console.log(`Vihngaaaaaaaaaaaaaaaa`,form)
  // }

  onSubmit(){
    console.log(`Vihngaaaaaaaaaaaaaaaa`,this.signupForm.valid);
    console.log(`this.signupForm`,this.signupForm);

  }

  // isFormInvalid(){
  //   return this.signupForm.invalid;
  // }
}
