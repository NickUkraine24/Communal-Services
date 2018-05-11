import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComserviceComponent } from './comservice.component';

describe('ComserviceComponent', () => {
  let component: ComserviceComponent;
  let fixture: ComponentFixture<ComserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
