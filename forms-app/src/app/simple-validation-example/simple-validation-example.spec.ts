import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleValidationExample } from './simple-validation-example';

describe('SimpleValidationExample', () => {
  let component: SimpleValidationExample;
  let fixture: ComponentFixture<SimpleValidationExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleValidationExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleValidationExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
