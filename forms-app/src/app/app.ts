import { Component, signal } from '@angular/core';
import { FormControlExample } from './form-control-example/form-control-example';
import { FormgroupExample } from './formgroup-example/formgroup-example';
import { NestedFormgroupExample } from './nested-formgroup-example/nested-formgroup-example';
import { SimpleValidationExample } from "./simple-validation-example/simple-validation-example";
import { ComplexValidationExample } from "./complex-validation-example/complex-validation-example";
import { CrossFieldValidationExample } from "./cross-field-validation-example/cross-field-validation-example";

@Component({
  selector: 'app-root',
  imports: [FormControlExample, FormgroupExample, NestedFormgroupExample, SimpleValidationExample, ComplexValidationExample, CrossFieldValidationExample],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('forms-app');
}
