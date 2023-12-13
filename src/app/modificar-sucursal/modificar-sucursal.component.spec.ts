import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarSucursalComponent } from './modificar-sucursal.component';

describe('ModificarSucursalComponent', () => {
  let component: ModificarSucursalComponent;
  let fixture: ComponentFixture<ModificarSucursalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarSucursalComponent]
    });
    fixture = TestBed.createComponent(ModificarSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
