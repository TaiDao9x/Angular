import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaTDonComponent } from './them-sua-t-don.component';

describe('ThemSuaTDonComponent', () => {
  let component: ThemSuaTDonComponent;
  let fixture: ComponentFixture<ThemSuaTDonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemSuaTDonComponent]
    });
    fixture = TestBed.createComponent(ThemSuaTDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
