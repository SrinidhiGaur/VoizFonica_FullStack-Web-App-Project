import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelpreplanComponent } from './delpreplan.component';

describe('DelpreplanComponent', () => {
  let component: DelpreplanComponent;
  let fixture: ComponentFixture<DelpreplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelpreplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelpreplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
