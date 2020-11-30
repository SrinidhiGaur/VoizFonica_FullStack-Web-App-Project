import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpaidpageComponent } from './postpaidpage.component';

describe('PostpaidpageComponent', () => {
  let component: PostpaidpageComponent;
  let fixture: ComponentFixture<PostpaidpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostpaidpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostpaidpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
