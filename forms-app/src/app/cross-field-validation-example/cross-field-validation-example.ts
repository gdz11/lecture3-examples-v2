import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';

const passwordMatchValidator: ValidatorFn = (form) => {
  return form.get('password')?.value === form.get('passwordRepeat')?.value ? null : { passwordmismatch: true };
}

@Component({
  selector: 'app-cross-field-validation-example',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './cross-field-validation-example.html',
  styleUrl: './cross-field-validation-example.css',
})
export class CrossFieldValidationExample {
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    passwordRepeat: new FormControl('', Validators.required)
  }, passwordMatchValidator);

  get username(){
    return this.form.controls.username;
  }

  get password(){
    return this.form.controls.password;
  }
}
