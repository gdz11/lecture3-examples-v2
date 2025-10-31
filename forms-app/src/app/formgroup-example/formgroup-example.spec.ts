import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormgroupExample } from './formgroup-example';

describe('FormgroupExample', () => {
  let component: FormgroupExample;
  let fixture: ComponentFixture<FormgroupExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormgroupExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormgroupExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
