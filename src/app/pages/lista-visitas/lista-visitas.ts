import { Component, OnInit } from '@angular/core';
import { VisitaService } from '../../visita.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-lista-visitas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-visitas.html',
  styleUrls: ['./lista-visitas.css']
})

export class ListaVisitasComponent implements OnInit {

  visitas: any[] = [];
  error = '';

  constructor(private visitaService: VisitaService,
  private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
  this.visitaService.getVisitas().subscribe({
    next: (data) => {
      console.log("BACKEND:", data);

      // FIX: El backend devuelve un array directo
      this.visitas = data;

      this.cdr.detectChanges();
      console.log("VISITAS ASIGNADAS:", this.visitas);
    },
    error: (err) => {
      this.error = "Error al cargar visitas";
      console.error(err);
    }
  });
}

}