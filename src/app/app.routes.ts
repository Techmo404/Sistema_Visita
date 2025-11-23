import { Routes } from '@angular/router';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion';
import { ListaVisitasComponent } from './pages/lista-visitas/lista-visitas';

export const routes: Routes = [
  { path: '', component: InicioSesionComponent },
  { path: 'visitas', component: ListaVisitasComponent }
];
