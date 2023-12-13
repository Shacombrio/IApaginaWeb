import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPlatilloComponent } from './modificar-platillo.component';

describe('ModificarPlatilloComponent', () => {
  let component: ModificarPlatilloComponent;
  let fixture: ComponentFixture<ModificarPlatilloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarPlatilloComponent]
    });
    fixture = TestBed.createComponent(ModificarPlatilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
