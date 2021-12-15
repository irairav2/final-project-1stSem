import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomInfoTableComponent } from './room-info-table.component';

describe('RoomInfoTableComponent', () => {
  let component: RoomInfoTableComponent;
  let fixture: ComponentFixture<RoomInfoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomInfoTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
