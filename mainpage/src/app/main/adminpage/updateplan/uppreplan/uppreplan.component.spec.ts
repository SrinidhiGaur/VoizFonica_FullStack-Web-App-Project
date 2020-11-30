import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppreplanComponent } from './uppreplan.component';

describe('UppreplanComponent', () => {
  let component: UppreplanComponent;
  let fixture: ComponentFixture<UppreplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UppreplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UppreplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
