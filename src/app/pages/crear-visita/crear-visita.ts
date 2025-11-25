import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VisitaService, Visita } from '../../visita.service';

@Component({
  selector: 'app-crear-visita',
  standalone: true,
  imports: [FormsModule, CommonModule],  // 👈 AGREGADO
  templateUrl: './crear-visita.html',
  styleUrls: ['./crear-visita.css']
})
export class CrearVisitaComponent {

  areas = [
    "Urgencias",
    "Pediatría",
    "Cardiología",
    "Dermatología",
    "Radiología",
    "Traumatología"
  ];

  visita: Visita = {
    nombre: '',
    rut: '',
    motivo_visita: '',
    hora_entrada: '09:00',
    hora_salida: '09:30',
    fecha: new Date().toISOString().slice(0,10),
    area: '',
    doctor: ''
  };

  constructor(private visitaService: VisitaService, private router: Router) {}

  crear() {
    if (!this.visita.nombre || !this.visita.rut) {
      alert('Nombre y RUT son obligatorios');
      return;
    }

    this.visitaService.crearVisita(this.visita).subscribe({
      next: () => {
        alert('Visita creada');
        this.router.navigate(['/visitas']);
      },
      error: () => alert('Error al crear visita')
    });
  }

  cancelar() {
    this.router.navigate(['/visitas']);
  }
}
