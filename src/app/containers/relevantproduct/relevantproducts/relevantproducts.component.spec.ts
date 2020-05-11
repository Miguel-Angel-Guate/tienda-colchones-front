import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelevantproductsComponent } from './relevantproducts.component';

describe('RelevantproductsComponent', () => {
  let component: RelevantproductsComponent;
  let fixture: ComponentFixture<RelevantproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelevantproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelevantproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
