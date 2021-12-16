import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestRoomPickerComponent } from './guest-room-picker.component';

describe('GuestRoomPickerComponent', () => {
  let component: GuestRoomPickerComponent;
  let fixture: ComponentFixture<GuestRoomPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestRoomPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestRoomPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
