import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PottysComponent } from './pottys.component';

describe('PottysComponent', () => {
  let component: PottysComponent;
  let fixture: ComponentFixture<PottysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PottysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PottysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
