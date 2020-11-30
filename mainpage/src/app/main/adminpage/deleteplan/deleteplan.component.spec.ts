import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteplanComponent } from './deleteplan.component';

describe('DeleteplanComponent', () => {
  let component: DeleteplanComponent;
  let fixture: ComponentFixture<DeleteplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
