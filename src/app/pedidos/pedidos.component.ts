import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../pedidos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pedidos: any[] = [];

  constructor(private pedidosService: PedidosService) {}

  ngOnInit(): void {
    this.pedidosService.obtenerTodosLosPedidos().subscribe((data) => {
      this.pedidos = data;
    });
  }

  completarPedido(id: string) {
    Swal.fire({
      title: '¿Estás seguro que el pedido fue terminado?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, completar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.pedidosService.eliminarPedido(id).subscribe(
          response => {
            Swal.fire(
              'Completado',
              'El pedido ha sido completado correctamente.',
              'success'
            );
            
            this.pedidosService.obtenerTodosLosPedidos().subscribe((data) => {
              this.pedidos = data;
            });
          },
          error => {
            console.error('Error al completar el pedido', error);
          }
        );
      }
    });
  }
}
