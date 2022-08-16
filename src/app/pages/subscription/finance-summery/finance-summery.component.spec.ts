import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceSummeryComponent } from './finance-summery.component';

describe('FinanceSummeryComponent', () => {
  let component: FinanceSummeryComponent;
  let fixture: ComponentFixture<FinanceSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceSummeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
