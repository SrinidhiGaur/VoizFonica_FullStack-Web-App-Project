import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdongplanComponent } from './updongplan.component';

describe('UpdongplanComponent', () => {
  let component: UpdongplanComponent;
  let fixture: ComponentFixture<UpdongplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdongplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdongplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
