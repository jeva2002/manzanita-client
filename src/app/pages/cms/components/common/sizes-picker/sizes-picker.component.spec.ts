import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizesPickerComponent } from './sizes-picker.component';

describe('SizesPickerComponent', () => {
  let component: SizesPickerComponent;
  let fixture: ComponentFixture<SizesPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizesPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizesPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
