import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionMessageSettingComponent } from './subscription-message-setting.component';

describe('SubscriptionMessageSettingComponent', () => {
  let component: SubscriptionMessageSettingComponent;
  let fixture: ComponentFixture<SubscriptionMessageSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionMessageSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionMessageSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
