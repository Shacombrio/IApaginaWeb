import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {
  private apiUrl = 'https://backendrestaurante2.onrender.com';

  constructor(private http: HttpClient) { }

  obtenerSucursales(): Observable<any> {
    return this.http.get(`${this.apiUrl}/sucursal/obtenerTodasLasSucursales`);
  }
  obtenerSucursal(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/sucursal/obtenerSucursal?id=${id}`);
  }

  actualizarSucursal(sucursal: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/sucursal/actualizarSucursal`, sucursal);
  }

 
  eliminarSucursal(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/eliminarSucursal?id=${id}`);
  }
}
