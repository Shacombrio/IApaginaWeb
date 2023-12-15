import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { IngredientesService } from '../ingredientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css']
})
export class IngredientesComponent {

  ingredientes: any[] = []; 

  constructor(private IngredientesService: IngredientesService, private router: Router) {}


  ngOnInit():void{
    this.IngredientesService.obtenerIngredientes().subscribe((data)=>{ 
      this.ingredientes = data;
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
        this.IngredientesService.eliminarIngrediente(id).subscribe(
          response => {
            Swal.fire(
              'Eliminado',
              'El ingrediente ha sido eliminado correctamente.',
              'success'
            ).then(() => {
              // Navegar a la página de Ingredientes
              this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(['Ingredientes']);
              });
            });
          },
          error => {
            console.error('Error al eliminar el ingrediente', error);
  
            Swal.fire(
              'Error',
              'Hubo un problema al eliminar el ingrediente.',
              'error'
            );
          }
        );
      }
    });
  }
  
}
