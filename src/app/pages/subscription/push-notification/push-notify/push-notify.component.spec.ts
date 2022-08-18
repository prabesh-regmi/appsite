import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushNotifyComponent } from './push-notify.component';

describe('PushNotifyComponent', () => {
  let component: PushNotifyComponent;
  let fixture: ComponentFixture<PushNotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushNotifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PushNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
