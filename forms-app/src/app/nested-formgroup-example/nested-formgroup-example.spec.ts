import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormgroupExample } from './nested-formgroup-example';

describe('NestedFormgroupExample', () => {
  let component: NestedFormgroupExample;
  let fixture: ComponentFixture<NestedFormgroupExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedFormgroupExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedFormgroupExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
