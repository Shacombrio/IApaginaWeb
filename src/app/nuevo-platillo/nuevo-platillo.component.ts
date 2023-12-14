import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlatillosService } from '../platillos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-platillo',
  templateUrl: './nuevo-platillo.component.html',
  styleUrls: ['./nuevo-platillo.component.css']
})
export class NuevoPlatilloComponent {

  platilloForm: FormGroup;

  constructor(private fb: FormBuilder, private platillosService: PlatillosService) {
    this.platilloForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      costo: ['', Validators.required],
      idPreferencia: ['opcion1', Validators.required], // Valor predeterminado, ajusta según tu necesidad
      platillo_dia: [false],
      url_imagen: [''] // Puedes añadir validaciones si es necesario
    });
  }

  onSubmit() {
    if (this.platilloForm.valid) {
      const platilloData = this.platilloForm.value;
      this.platillosService.crearPlatillo(platilloData).subscribe(
        (response) => {
          console.log(response); 
          
          Swal.fire({
            icon: 'success',
            title: 'Platillo agregado exitosamente',
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
