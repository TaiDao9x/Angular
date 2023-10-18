import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonAnComponent } from './mon-an.component';

describe('MonAnComponent', () => {
  let component: MonAnComponent;
  let fixture: ComponentFixture<MonAnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonAnComponent]
    });
    fixture = TestBed.createComponent(MonAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
