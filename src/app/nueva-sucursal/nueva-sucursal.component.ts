import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SucursalesService } from '../sucursales.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-sucursal',
  templateUrl: './nueva-sucursal.component.html',
  styleUrls: ['./nueva-sucursal.component.css']
})
export class NuevaSucursalComponent {
  sucursalForm: FormGroup;

  constructor(private fb: FormBuilder, private sucursalesService: SucursalesService) {
    this.sucursalForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      latitud: ['', Validators.required],
      longitud: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.sucursalForm.valid) {
      const sucursalData = this.sucursalForm.value;
      this.sucursalesService.actualizarSucursal(sucursalData).subscribe(
        (response) => {
          console.log(response); 
          Swal.fire({
            icon: 'success',
            title: 'Sucursal agregada exitosamente',
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

