import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsPickerComponent } from './colors-picker.component';

describe('ColorsPickerComponent', () => {
  let component: ColorsPickerComponent;
  let fixture: ComponentFixture<ColorsPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorsPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorsPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
