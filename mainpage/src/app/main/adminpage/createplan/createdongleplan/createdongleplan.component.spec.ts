import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedongleplanComponent } from './createdongleplan.component';

describe('CreatedongleplanComponent', () => {
  let component: CreatedongleplanComponent;
  let fixture: ComponentFixture<CreatedongleplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedongleplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedongleplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
