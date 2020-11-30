import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DongleplansComponent } from './dongleplans.component';

describe('DongleplansComponent', () => {
  let component: DongleplansComponent;
  let fixture: ComponentFixture<DongleplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DongleplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DongleplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
