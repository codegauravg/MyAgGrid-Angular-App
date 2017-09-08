import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCompComponent } from './color-comp.component';

describe('ColorCompComponent', () => {
  let component: ColorCompComponent;
  let fixture: ComponentFixture<ColorCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
