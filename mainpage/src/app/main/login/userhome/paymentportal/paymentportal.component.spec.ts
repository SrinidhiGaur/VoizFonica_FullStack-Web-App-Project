import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentportalComponent } from './paymentportal.component';

describe('PaymentportalComponent', () => {
  let component: PaymentportalComponent;
  let fixture: ComponentFixture<PaymentportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentportalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
