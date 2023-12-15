import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientesService {

  private apiUrl = 'https://backendrestaurante2.onrender.com'; 
  
  constructor(private http: HttpClient) { }

  obtenerIngredientes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/ingredientes/obtenerIngredientes`);
  }

  crearIngrediente(ingredienteData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/ingredientes/crearIngrediente`, ingredienteData);
  }

  eliminarIngrediente(id: string): Observable<any> {
    const url = `${this.apiUrl}/ingredientes/eliminarIngrediente`;
    return this.http.delete(url, { body: { id } });
  }
}
