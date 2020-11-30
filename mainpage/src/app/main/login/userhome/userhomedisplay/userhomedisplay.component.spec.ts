import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserhomedisplayComponent } from './userhomedisplay.component';

describe('UserhomedisplayComponent', () => {
  let component: UserhomedisplayComponent;
  let fixture: ComponentFixture<UserhomedisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserhomedisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserhomedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
