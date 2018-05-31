import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBoxFixComponent } from './input-box-fix.component';

describe('InputBoxFixComponent', () => {
  let component: InputBoxFixComponent;
  let fixture: ComponentFixture<InputBoxFixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputBoxFixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBoxFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
