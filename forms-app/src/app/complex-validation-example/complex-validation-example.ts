import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-complex-validation-example',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './complex-validation-example.html',
  styleUrl: './complex-validation-example.css',
})
export class ComplexValidationExample {
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z]{1,}')
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z]{1,}')
    ]),
    gender: new FormControl(null, Validators.required),
    phone: new FormControl('', Validators.pattern('5[0-9]{8}')),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    isLegalAge: new FormControl(false, { validators: Validators.requiredTrue, updateOn: 'change' })
  }, {updateOn: 'blur'});

  genders = [
    { id: 1, name: 'Male' },
    { id: 2, name: 'Female' },
    { id: null, name: 'Specify gender' }
  ];

  onSubmit(){
    console.log(this.form.value);
  }

  get name(){
    return this.form.controls.name;
  }

  get lastname(){
    return this.form.controls.lastname;
  }

  get gender(){
    return this.form.controls.gender;
  }

  get phone(){
    return this.form.controls.phone;
  }

  get email(){
    return this.form.controls.email;
  }

  get isLegalAge(){
    return this.form.controls.isLegalAge;
  }
}
