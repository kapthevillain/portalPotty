import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatedPottysComponent } from './associated-pottys.component';

describe('AssociatedPottysComponent', () => {
  let component: AssociatedPottysComponent;
  let fixture: ComponentFixture<AssociatedPottysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatedPottysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatedPottysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
