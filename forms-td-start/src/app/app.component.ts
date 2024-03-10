import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;

  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  isFormSubmited:boolean=false;

  user ={
    username:'',
    email:'',
    secreteQuestion:'',
    answer:'',
    gender:''
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData:{
    //     username:suggestedName,
    //     email:''
    //   },
    //   secret:'pet',
    //   questionAnswer:'',
    //   gender:'male'
    // })
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  // onSubmit(form:NgForm){
  //   console.log(`Vihngaaaaaaaaaaaaaaaa`,form)
  // }

  onSubmit() {
    this.isFormSubmited =true;
    console.log(`Vihngaaaaaaaaaaaaaaaa`, this.signupForm.valid);
    console.log(`this.signupForm`, this.signupForm);
    const formData = this.signupForm.value;
    const userData = formData.userData;

    this.user.username =userData.username;
    this.user.email =userData.email;
    this.user.secreteQuestion =formData.secret;
    this.user.answer =formData.questionAnswer;
    this.user.gender =formData.gender;


  }

  // isFormInvalid(){
  //   return this.signupForm.invalid;
  // }
}
