// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion';
import { ListaVisitasComponent } from './pages/lista-visitas/lista-visitas';
import { CrearVisitaComponent } from './pages/crear-visita/crear-visita';
import { EditarVisitaComponent } from './pages/editar-visita/editar-visita';

export const routes: Routes = [
  { path: '', component: InicioSesionComponent },
  { path: 'visitas', component: ListaVisitasComponent },
  { path: 'visitas/crear', component: CrearVisitaComponent },
  { path: 'visitas/editar/:id', component: EditarVisitaComponent },
];
