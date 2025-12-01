import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderHeuristicaComponent } from '../../../../components/header-heuristicaComponent/header-heuristicaComponent';

@Component({
  selector: 'app-errores-malo',
  imports: [FormsModule,CommonModule,HeaderHeuristicaComponent],
  templateUrl: `./erroresMalo.html`,
  //styleUrl: './erroresMalo.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErroresMalo { 
  // Malo
  user1 = '';
  password1 = '';
  error1 = signal(false);

  login1() {
    this.error.set(true);
    console.error('ERROR 401 - BAD CREDENTIALS');
  }
  //Bueno
  user = '';
  password = '';

  error = signal(false);
  verPass = signal(false);

  estadoUsuario = signal<'neutral' | 'error' | 'ok'>('neutral');

  validarUsuario() {
    if (this.user.length === 0) {
      this.estadoUsuario.set('neutral');
    } else if (this.user.length < 3) {
      this.estadoUsuario.set('error');
    } else {
      this.estadoUsuario.set('ok');
    }
  }

  toggleVerPass() {
    this.verPass.update(v => !v);
  }

  login() {
    if (this.user !== 'admin' || this.password !== '1234') {
      this.error.set(true);
    } else {
      alert('Inicio de sesión exitoso');
      this.error.set(false);
    }
  }

  reintentar() {
    this.error.set(false);
  }
}
