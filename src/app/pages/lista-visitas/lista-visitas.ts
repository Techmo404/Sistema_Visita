import { Component, OnInit } from '@angular/core';
import { VisitaService } from '../../visita.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-lista-visitas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-visitas.html',
  styleUrls: ['./lista-visitas.css']
})
export class ListaVisitasComponent implements OnInit {

  visitas: any[] = [];
  visitasFiltradas: any[] = [];

  filtroNombre = '';
  filtroRut = '';
  filtroFecha = '';

  mostrarGrafico = false;
  chart: any;

  constructor(private visitaService: VisitaService,
              private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.visitaService.getVisitas().subscribe({
      next: (data) => {
        this.visitas = data;
        this.visitasFiltradas = [...this.visitas];
        this.cdr.detectChanges();
      },
      error: () => {
        console.error("Error al cargar visitas");
      }
    });
  }

  aplicarFiltros() {
    this.visitasFiltradas = this.visitas.filter(v => {

      const cumpleNombre = v.nombre
        .toLowerCase()
        .includes(this.filtroNombre.toLowerCase());

      const cumpleRut = v.rut
        .toLowerCase()
        .includes(this.filtroRut.toLowerCase());

      const cumpleFecha = this.filtroFecha
        ? v.fecha === this.filtroFecha
        : true;

      return cumpleNombre && cumpleRut && cumpleFecha;
    });
  }

  toggleGrafico() {
    this.mostrarGrafico = !this.mostrarGrafico;

    if (this.mostrarGrafico) {
      setTimeout(() => this.generarGrafico(), 200);
    }
  }

  generarGrafico() {
    if (this.chart) this.chart.destroy();

    const dias = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
    const conteo = [0, 0, 0, 0, 0, 0, 0];

    this.visitas.forEach(v => {
      const d = new Date(v.fecha).getDay();
      conteo[d === 0 ? 6 : d - 1]++; // Ajuste para lunes-domingo
    });

    const ctx = document.getElementById('graficoSemanal') as any;

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: dias,
        datasets: [{
          label: 'Visitas por día',
          data: conteo
        }]
      }
    });
  }
}
