import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { FormsModule } from '@angular/forms';   // ⬅ IMPORTANTE

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [FormsModule],                       // ⬅ AGREGA ESTO
  templateUrl: './inicio-sesion.html',
  styleUrls: ['./inicio-sesion.css']
})
export class InicioSesionComponent {

  username = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: data => {
        this.authService.getAccessToken()?.trim();
        alert('Inicio de sesión exitoso');
        this.router.navigate(['/visitas']);
      },
      error: () => {
        alert('Credenciales incorrectas');
      }
    });
  }
}
