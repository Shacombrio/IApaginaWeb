import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

  private apiUrl = 'https://backendrestaurante2.onrender.com'; 

  constructor(private http: HttpClient) { }

  obtenerPlatillo(): Observable<any> {
    return this.http.get(`${this.apiUrl}/recomendaciones/obtenerTodosLosPlatillos`);
  }

  crearPlatillo(platilloData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/recomendaciones/crearPlatillo`, platilloData);
  }
}
