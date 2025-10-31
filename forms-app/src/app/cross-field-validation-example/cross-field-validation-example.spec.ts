import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossFieldValidationExample } from './cross-field-validation-example';

describe('CrossFieldValidationExample', () => {
  let component: CrossFieldValidationExample;
  let fixture: ComponentFixture<CrossFieldValidationExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrossFieldValidationExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrossFieldValidationExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
