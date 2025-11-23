import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {

  private apiUrl = 'http://127.0.0.1:8000/api/Visita/';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getVisitas(): Observable<any> {
    const token = this.authService.getAccessToken()?.trim();
    console.log("TOKEN QUE SE ENVÍA:", token);

    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

  return this.http.get(this.apiUrl, { headers });
}

  
}
