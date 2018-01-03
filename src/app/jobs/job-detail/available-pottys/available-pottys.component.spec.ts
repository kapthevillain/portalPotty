import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablePottysComponent } from './available-pottys.component';

describe('AvailablePottysComponent', () => {
  let component: AvailablePottysComponent;
  let fixture: ComponentFixture<AvailablePottysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailablePottysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailablePottysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
