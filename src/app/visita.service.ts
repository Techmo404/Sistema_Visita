import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {

  private apiUrl = 'http://127.0.0.1:8000/api/Visita/';

  constructor(private http: HttpClient) {}

  getVisitas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
