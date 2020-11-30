import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeldongplanComponent } from './deldongplan.component';

describe('DeldongplanComponent', () => {
  let component: DeldongplanComponent;
  let fixture: ComponentFixture<DeldongplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeldongplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeldongplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
