import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsTDonComponent } from './ds-t-don.component';

describe('DsTDonComponent', () => {
  let component: DsTDonComponent;
  let fixture: ComponentFixture<DsTDonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DsTDonComponent]
    });
    fixture = TestBed.createComponent(DsTDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
