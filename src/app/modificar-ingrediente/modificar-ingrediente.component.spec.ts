import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarIngredienteComponent } from './modificar-ingrediente.component';

describe('ModificarIngredienteComponent', () => {
  let component: ModificarIngredienteComponent;
  let fixture: ComponentFixture<ModificarIngredienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarIngredienteComponent]
    });
    fixture = TestBed.createComponent(ModificarIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
