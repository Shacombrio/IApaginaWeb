import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoIngredienteComponent } from './nuevo-ingrediente.component';

describe('NuevoIngredienteComponent', () => {
  let component: NuevoIngredienteComponent;
  let fixture: ComponentFixture<NuevoIngredienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoIngredienteComponent]
    });
    fixture = TestBed.createComponent(NuevoIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
