import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SucursalesService } from '../sucursales.service';

@Component({
  selector: 'app-modificar-sucursal',
  templateUrl: './modificar-sucursal.component.html',
  styleUrls: ['./modificar-sucursal.component.css']
})
export class ModificarSucursalComponent implements OnInit {
  sucursalForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private sucursalesService: SucursalesService
  ) {
    this.sucursalForm = this.formBuilder.group({
      id: [''], 
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      latitud: ['', Validators.required],
      longitud: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    //aqui obtengo el ID de la sucursal 
    const id = this.route.snapshot.paramMap.get('id');
  
    if (id !== null) {
      // aqui se obtienen los datos de la sucursal según el id obtenido, se valida que no sea null
      this.sucursalesService.obtenerSucursal(id).subscribe(
        (response) => {
          this.sucursalForm.patchValue(response); 
        },
        (error) => {
          console.error('Error al obtener la sucursal:', error);
        }
      );
    } else {
      console.error('ID de sucursal no encontrado en la URL.');
    
    }
  }
  

  onSubmit(): void {
    if (this.sucursalForm.valid) {
      // Enviar los datos actualizados al servidor
      this.sucursalesService.actualizarSucursal(this.sucursalForm.value).subscribe(
        (response) => {
          console.log('Sucursal actualizada con éxito:', response);
          
        },
        (error) => {
          console.error('Error al actualizar la sucursal:', error);
        }
      );
    }
  }
}
