import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelpostplanComponent } from './delpostplan.component';

describe('DelpostplanComponent', () => {
  let component: DelpostplanComponent;
  let fixture: ComponentFixture<DelpostplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelpostplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelpostplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
