import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDivComponent } from './room-div.component';

describe('RoomDivComponent', () => {
  let component: RoomDivComponent;
  let fixture: ComponentFixture<RoomDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
