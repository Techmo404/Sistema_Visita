import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitaService } from '../../visita.service';

@Component({
  selector: 'app-editar-visita',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-visita.html',
  styleUrls: ['./editar-visita.css']
})
export class EditarVisitaComponent implements OnInit {

  visita: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private visitaService: VisitaService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.visitaService.getVisita(id).subscribe({
      next: (data: any) => {
        this.visita = data;
      }
    });
  }
  

  guardar() {
    this.visitaService.editarVisita(this.visita.id, this.visita).subscribe({
      next: () => {
        alert("Visita actualizada correctamente");
        this.router.navigate(['/visitas']);
      }
    });
  }

  cancelar() {
    this.router.navigate(['/visitas']);
  }
}
