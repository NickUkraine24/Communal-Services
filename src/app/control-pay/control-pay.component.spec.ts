import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPayComponent } from './control-pay.component';

describe('ControlPayComponent', () => {
  let component: ControlPayComponent;
  let fixture: ComponentFixture<ControlPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
