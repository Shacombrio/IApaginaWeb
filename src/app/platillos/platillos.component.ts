import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { PlatillosService } from '../platillos.service';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.css']
})
export class PlatillosComponent {

  platillos: any[] = []; 

  constructor(private platillosService: PlatillosService) {}


  ngOnInit():void{
    this.platillosService.obtenerPlatillo().subscribe((data)=>{ 
      this.platillos = data;
    })
  }
  

  eliminarRegistro() {

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
        //lógica para eliminar el registro
        Swal.fire(
          'Eliminado',
          'El registro ha sido eliminado correctamente.',
          'success'
        );
      }
    });
  }
}
