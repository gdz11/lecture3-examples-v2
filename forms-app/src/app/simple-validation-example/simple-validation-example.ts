import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-validation-example',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './simple-validation-example.html',
  styleUrl: './simple-validation-example.css',
})
export class SimpleValidationExample {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ])
  });

  get name(){
    return this.form.controls.name;
  }

  get lastname(){
    return this.form.controls.lastname;
  }

}
