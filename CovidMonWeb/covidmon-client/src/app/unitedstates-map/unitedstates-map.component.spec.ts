import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitedstatesMapComponent } from './unitedstates-map.component';

describe('UnitedstatesMapComponent', () => {
  let component: UnitedstatesMapComponent;
  let fixture: ComponentFixture<UnitedstatesMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitedstatesMapComponent]
    });
    fixture = TestBed.createComponent(UnitedstatesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
