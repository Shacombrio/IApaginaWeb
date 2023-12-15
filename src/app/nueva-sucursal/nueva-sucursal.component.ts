import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SucursalesService } from '../sucursales.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-sucursal',
  templateUrl: './nueva-sucursal.component.html',
  styleUrls: ['./nueva-sucursal.component.css']
})
export class NuevaSucursalComponent implements OnInit {
  sucursalForm: FormGroup;

  constructor(private fb: FormBuilder, private sucursalesService: SucursalesService, private router: Router) {
    this.sucursalForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      latitud: ['', Validators.required],
      longitud: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.sucursalForm.valid) {
      const sucursalData = this.sucursalForm.value;
      this.sucursalesService.crearSucursal(sucursalData).subscribe(
        (response) => {
          console.log(response);
          Swal.fire({
            icon: 'success',
            title: 'Sucursal agregada exitosamente',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate(['DatosRestaurante']);
            });
          });
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
