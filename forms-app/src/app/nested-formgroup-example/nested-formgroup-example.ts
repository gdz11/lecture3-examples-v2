import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nested-formgroup-example',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './nested-formgroup-example.html',
  styleUrl: './nested-formgroup-example.css',
})
export class NestedFormgroupExample {
  registrationForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormGroup({
      city: new FormControl('Tbilisi'),
      street: new FormControl('')
    })
  });

  onChangeCity(){
    this.registrationForm.patchValue({
      address: {
        city: 'Batumi'
      }
    });
  }
}
