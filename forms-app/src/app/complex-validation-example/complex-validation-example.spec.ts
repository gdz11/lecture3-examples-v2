import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexValidationExample } from './complex-validation-example';

describe('ComplexValidationExample', () => {
  let component: ComplexValidationExample;
  let fixture: ComponentFixture<ComplexValidationExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplexValidationExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplexValidationExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
