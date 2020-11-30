import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivechatadminComponent } from './livechatadmin.component';

describe('LivechatadminComponent', () => {
  let component: LivechatadminComponent;
  let fixture: ComponentFixture<LivechatadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivechatadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivechatadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
