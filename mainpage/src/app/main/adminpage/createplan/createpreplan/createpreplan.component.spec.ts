import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepreplanComponent } from './createpreplan.component';

describe('CreatepreplanComponent', () => {
  let component: CreatepreplanComponent;
  let fixture: ComponentFixture<CreatepreplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatepreplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepreplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
