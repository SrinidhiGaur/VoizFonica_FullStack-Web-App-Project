import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepaidpageComponent } from './prepaidpage.component';

describe('PrepaidpageComponent', () => {
  let component: PrepaidpageComponent;
  let fixture: ComponentFixture<PrepaidpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepaidpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepaidpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
