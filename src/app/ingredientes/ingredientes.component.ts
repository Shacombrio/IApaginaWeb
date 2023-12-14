import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { IngredientesService } from '../ingredientes.service';
@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css']
})
export class IngredientesComponent {

  ingredientes: any[] = []; 

  constructor(private IngredientesService: IngredientesService) {}


  ngOnInit():void{
    this.IngredientesService.obtenerIngredientes().subscribe((data)=>{ 
      this.ingredientes = data;
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
