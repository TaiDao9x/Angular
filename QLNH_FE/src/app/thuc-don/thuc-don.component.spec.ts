import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThucDonComponent } from './thuc-don.component';

describe('ThucDonComponent', () => {
  let component: ThucDonComponent;
  let fixture: ComponentFixture<ThucDonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThucDonComponent]
    });
    fixture = TestBed.createComponent(ThucDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
