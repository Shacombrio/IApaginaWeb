import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private apiUrl = 'https://backendrestaurante2.onrender.com';

  constructor(private http: HttpClient) { }

  obtenerTodosLosPedidos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/pedidos/MostrarTodosLosPedidos`);
  }

  eliminarPedido(id: string): Observable<any> {
    const url = `${this.apiUrl}/pedidos/completarPedido`;
    return this.http.delete(url, { body: { id } });
  }
}
