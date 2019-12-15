import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyHomeComponent } from './lazy-home.component';

describe('LazyHomeComponent', () => {
  let component: LazyHomeComponent;
  let fixture: ComponentFixture<LazyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
