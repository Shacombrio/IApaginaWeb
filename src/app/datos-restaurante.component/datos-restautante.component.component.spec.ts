import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosRestautanteComponentComponent } from './datos-restautante.component.component';

describe('DatosRestautanteComponentComponent', () => {
  let component: DatosRestautanteComponentComponent;
  let fixture: ComponentFixture<DatosRestautanteComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosRestautanteComponentComponent]
    });
    fixture = TestBed.createComponent(DatosRestautanteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
