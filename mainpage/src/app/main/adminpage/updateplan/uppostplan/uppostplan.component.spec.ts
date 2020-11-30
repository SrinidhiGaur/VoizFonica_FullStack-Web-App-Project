import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppostplanComponent } from './uppostplan.component';

describe('UppostplanComponent', () => {
  let component: UppostplanComponent;
  let fixture: ComponentFixture<UppostplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UppostplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UppostplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
