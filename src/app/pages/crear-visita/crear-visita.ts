// src/app/pages/crear-visita/crear-visita.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VisitaService, Visita } from '../../visita.service';

@Component({
  selector: 'app-crear-visita',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-visita.html',
  styleUrls: ['./crear-visita.css']
})
export class CrearVisitaComponent {

  visita: Visita = {
    nombre: '',
    rut: '',
    motivo_visita: '',
    hora_entrada: '09:00',
    hora_salida: '09:30',
    fecha: new Date().toISOString().slice(0,10)
  };

  constructor(private visitaService: VisitaService, private router: Router) {}

  crear() {
    // Validaciones simples
    if (!this.visita.nombre || !this.visita.rut) {
      alert('Nombre y RUT son obligatorios');
      return;
    }

    this.visitaService.crearVisita(this.visita).subscribe({
      next: () => {
        alert('Visita creada');
        this.router.navigate(['/visitas']);
      },
      error: (err) => {
        console.error(err);
        alert('Error al crear visita');
      }
    });
  }

  cancelar() {
    this.router.navigate(['/visitas']);
  }
}
