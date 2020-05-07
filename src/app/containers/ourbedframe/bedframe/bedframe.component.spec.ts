import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedframeComponent } from './bedframe.component';

describe('BedframeComponent', () => {
  let component: BedframeComponent;
  let fixture: ComponentFixture<BedframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
