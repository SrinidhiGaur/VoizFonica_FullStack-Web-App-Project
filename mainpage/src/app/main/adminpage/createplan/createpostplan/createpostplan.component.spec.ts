import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepostplanComponent } from './createpostplan.component';

describe('CreatepostplanComponent', () => {
  let component: CreatepostplanComponent;
  let fixture: ComponentFixture<CreatepostplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatepostplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepostplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
