import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateofferComponent } from './updateoffer.component';

describe('UpdateofferComponent', () => {
  let component: UpdateofferComponent;
  let fixture: ComponentFixture<UpdateofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateofferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
