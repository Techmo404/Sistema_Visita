// src/app/visita.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Visita {
  id?: number;
  nombre: string;
  rut: string;
  motivo_visita: string;
  hora_entrada: string; // "HH:MM:SS" o "HH:MM"
  hora_salida: string;
  fecha: string; // "YYYY-MM-DD"
}

@Injectable({
  providedIn: 'root'
})
export class VisitaService {

  private apiUrl = 'http://127.0.0.1:8000/api/Visita/';

  constructor(private http: HttpClient) {}

  // Listar
  getVisitas(): Observable<Visita[]> {
    return this.http.get<Visita[]>(this.apiUrl);
  }

  // Obtener una visita
  getVisita(id: number): Observable<Visita> {
    return this.http.get<Visita>(`${this.apiUrl}${id}/`);
  }

  // Crear
  crearVisita(data: Visita): Observable<Visita> {
    return this.http.post<Visita>(this.apiUrl, data);
  }

  // Editar
  editarVisita(id: number, data: Visita): Observable<Visita> {
    return this.http.put<Visita>(`${this.apiUrl}${id}/`, data);
  }

  // Eliminar
  eliminarVisita(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}
