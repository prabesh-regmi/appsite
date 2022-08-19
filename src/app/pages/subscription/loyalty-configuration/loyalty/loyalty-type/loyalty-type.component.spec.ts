import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyTypeComponent } from './loyalty-type.component';

describe('LoyaltyTypeComponent', () => {
  let component: LoyaltyTypeComponent;
  let fixture: ComponentFixture<LoyaltyTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoyaltyTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyaltyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
