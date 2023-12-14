import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { SucursalesService } from '../sucursales.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-datos-restautante.component',
  templateUrl: './datos-restautante.component.component.html',
  styleUrls: ['./datos-restautante.component.component.css']
})

export class DatosRestauranteComponentComponent implements OnInit {
  sucursales: any[] = []; 

  constructor(private sucursalesService: SucursalesService) {}


  ngOnInit():void{
    this.sucursalesService.obtenerSucursales().subscribe((data)=>{ 
      this.sucursales = data;
    })
  }
  

  eliminarRegistro(id: string) {
    Swal.fire({
      title: '¿Estás seguro de eliminar?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.sucursalesService.eliminarSucursal(id).subscribe(
          response => {
           
            Swal.fire(
              'Eliminado',
              'El registro ha sido eliminado correctamente.',
              'success'
            );
          },
          error => {
           
            console.error('Error al eliminar la sucursal', error);
          }
        );
      }
    });
  }
}




