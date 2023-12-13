import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-datos-restautante.component',
  templateUrl: './datos-restautante.component.component.html',
  styleUrls: ['./datos-restautante.component.component.css']
})
export class DatosRestautanteComponentComponent {



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
