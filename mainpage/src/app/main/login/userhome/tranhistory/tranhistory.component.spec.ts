import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranhistoryComponent } from './tranhistory.component';

describe('TranhistoryComponent', () => {
  let component: TranhistoryComponent;
  let fixture: ComponentFixture<TranhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranhistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
