import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLazyComponent } from './dynamic-lazy.component';

describe('DynamicLazyComponent', () => {
  let component: DynamicLazyComponent;
  let fixture: ComponentFixture<DynamicLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
