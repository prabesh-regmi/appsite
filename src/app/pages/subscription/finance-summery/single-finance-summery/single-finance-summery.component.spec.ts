import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFinanceSummeryComponent } from './single-finance-summery.component';

describe('SingleFinanceSummeryComponent', () => {
  let component: SingleFinanceSummeryComponent;
  let fixture: ComponentFixture<SingleFinanceSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleFinanceSummeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFinanceSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
