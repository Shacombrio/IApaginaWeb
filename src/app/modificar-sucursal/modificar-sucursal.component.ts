import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SucursalesService } from '../sucursales.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificarsucursal',
  templateUrl: './modificar-sucursal.component.html',
  styleUrls: ['./modificar-sucursal.component.css']
})
export class ModificarSucursalComponent implements OnInit {
  sucursalForm: FormGroup;
  private id: string = ''; // Agrega una propiedad para almacenar el ID

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private sucursalesService: SucursalesService,
    private router: Router
  ) {
    this.sucursalForm = this.formBuilder.group({
      nombre: '',
      direccion: '',
      latitud: '',
      longitud: ''
    });
  }

  ngOnInit(): void {
    // Obtener el ID de la ruta
    const idFromRoute = this.route.snapshot.paramMap.get('id');
  
    // Verificar si idFromRoute no es nulo antes de asignarlo a this.id
    if (idFromRoute !== null) {
      this.id = idFromRoute;

      // Realizar la solicitud HTTP para obtener la sucursal por ID
      this.http.post(`https://backendrestaurante2.onrender.com/sucursal/obtenerSucursal`, { id: this.id }).subscribe(
        (respuesta: any) => {
          // Rellenar el formulario con los datos obtenidos
          this.sucursalForm.setValue({
            nombre: respuesta[0].nombre,
            direccion: respuesta[0].direccion,
            latitud: respuesta[0].latitud,
            longitud: respuesta[0].longitud
          });
        }
      );
    } else {
      console.error('ID de ruta es nulo.');

      // SweetAlert para mostrar mensaje de error al obtener el ID de la ruta
      Swal.fire({
        icon: 'error',
        title: 'Error al obtener ID de la ruta',
        text: 'Hubo un problema al obtener el ID de la ruta.',
      });
    }
  }

  onSubmit() {
    const sucursalData = this.sucursalForm.value;
  
    // Obtener el ID dinámicamente desde la URL
    const idFromUrl = this.route.snapshot.params['id'];
  
    // Agregar el ID a los datos de la sucursal
    sucursalData.id = idFromUrl;
  
    // Mostrar el contenido antes de enviar
    console.log('Datos de la sucursal a enviar:', sucursalData);
    
    // Llamar al servicio para actualizar la sucursal
    this.sucursalesService.actualizarSucursal(sucursalData).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);

        // SweetAlert para mostrar mensaje de éxito al actualizar la sucursal
        Swal.fire({
          icon: 'success',
          title: 'Sucursal actualizada exitosamente',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['DatosRestaurante']);
          });
        });
        
      },
      (error) => {
        console.error('Error al actualizar sucursal:', error);

        // SweetAlert para mostrar mensaje de error al actualizar la sucursal
        Swal.fire({
          icon: 'error',
          title: 'Error al actualizar sucursal',
          text: 'Hubo un problema al actualizar la sucursal.',
        });
      }

    );
  }
}
