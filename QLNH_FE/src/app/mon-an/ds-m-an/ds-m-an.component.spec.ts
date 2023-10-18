import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsMAnComponent } from './ds-m-an.component';

describe('DsMAnComponent', () => {
  let component: DsMAnComponent;
  let fixture: ComponentFixture<DsMAnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DsMAnComponent]
    });
    fixture = TestBed.createComponent(DsMAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
