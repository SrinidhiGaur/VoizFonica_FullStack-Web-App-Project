import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paymentportal1Component } from './paymentportal1.component';

describe('Paymentportal1Component', () => {
  let component: Paymentportal1Component;
  let fixture: ComponentFixture<Paymentportal1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Paymentportal1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Paymentportal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
