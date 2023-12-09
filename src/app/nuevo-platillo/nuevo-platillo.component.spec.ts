import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPlatilloComponent } from './nuevo-platillo.component';

describe('NuevoPlatilloComponent', () => {
  let component: NuevoPlatilloComponent;
  let fixture: ComponentFixture<NuevoPlatilloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoPlatilloComponent]
    });
    fixture = TestBed.createComponent(NuevoPlatilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
