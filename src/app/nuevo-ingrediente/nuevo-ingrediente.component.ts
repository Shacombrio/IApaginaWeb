import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IngredientesService } from '../ingredientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-ingrediente',
  templateUrl: './nuevo-ingrediente.component.html',
  styleUrls: ['./nuevo-ingrediente.component.css']
})
export class NuevoIngredienteComponent {

  ingredienteForm: FormGroup;

  constructor(private fb: FormBuilder, private ingredientesService: IngredientesService) {
    this.ingredienteForm = this.fb.group({
      nombre: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.ingredienteForm.valid) {
      const ingredienteData = this.ingredienteForm.value;
      this.ingredientesService.crearIngrediente(ingredienteData).subscribe(
        (response) => {
          console.log(response); 
          Swal.fire({
            icon: 'success',
            title: 'Ingrediente agregado exitosamente',
            showConfirmButton: false,
            timer: 1500
          });
        },
        (error) => {
          console.error(error); 
        }
      );
    }
  }
}
