import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {
  private apiUrl = 'https://backendrestaurante2.onrender.com';

  constructor(private http: HttpClient) { }

  crearSucursal(sucursalData: any): Observable<any> {
    const url = `${this.apiUrl}/sucursal/crearSucursal`;
    return this.http.post(url, sucursalData);
  }

  obtenerSucursales(): Observable<any> {
    return this.http.get(`${this.apiUrl}/sucursal/obtenerTodasLasSucursales`);
  }

  obtenerSucursal(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = { id: id };

    return this.http.post(`${this.apiUrl}/sucursal/obtenerSucursal`, body, { headers: headers });
  }

  actualizarSucursal(sucursal: any): Observable<any> {
    const url = `${this.apiUrl}/sucursal/actualizarSucursal`;
    return this.http.put(url, sucursal);
  }

 
  eliminarSucursal(id: string): Observable<any> {
    const url = `${this.apiUrl}/sucursal/eliminarSucursal`;
    return this.http.delete(url, { body: { id } });
  }
}
