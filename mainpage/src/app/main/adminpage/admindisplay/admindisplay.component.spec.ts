import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindisplayComponent } from './admindisplay.component';

describe('AdmindisplayComponent', () => {
  let component: AdmindisplayComponent;
  let fixture: ComponentFixture<AdmindisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
