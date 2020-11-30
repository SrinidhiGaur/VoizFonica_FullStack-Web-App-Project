import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonglepageComponent } from './donglepage.component';

describe('DonglepageComponent', () => {
  let component: DonglepageComponent;
  let fixture: ComponentFixture<DonglepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonglepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonglepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
