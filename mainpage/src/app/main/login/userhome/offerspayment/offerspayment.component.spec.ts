import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferspaymentComponent } from './offerspayment.component';

describe('OfferspaymentComponent', () => {
  let component: OfferspaymentComponent;
  let fixture: ComponentFixture<OfferspaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferspaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferspaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
