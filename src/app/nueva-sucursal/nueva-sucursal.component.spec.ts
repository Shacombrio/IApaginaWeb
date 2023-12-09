import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaSucursalComponent } from './nueva-sucursal.component';

describe('NuevaSucursalComponent', () => {
  let component: NuevaSucursalComponent;
  let fixture: ComponentFixture<NuevaSucursalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevaSucursalComponent]
    });
    fixture = TestBed.createComponent(NuevaSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
