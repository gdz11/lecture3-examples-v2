import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formgroup-example',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './formgroup-example.html',
  styleUrl: './formgroup-example.css',
})
export class FormgroupExample {
  registrationForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });

  onChangeDataClick(){
    this.registrationForm.setValue({
      name: 'test name',
      email: 'test@example.com'
    });
  }

  onChangeNameClick(){
    this.registrationForm.patchValue({
      name: 'New name'
    });
  }
}
