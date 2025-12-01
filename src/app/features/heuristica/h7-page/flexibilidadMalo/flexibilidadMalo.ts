import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderHeuristicaComponent } from '../../../../components/header-heuristicaComponent/header-heuristicaComponent';

@Component({
  selector: 'app-flexibilidad-malo',
  imports: [FormsModule,CommonModule,HeaderHeuristicaComponent],
  templateUrl: `./flexibilidadMalo.html`,
  //styleUrl: './flexibilidadMalo.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlexibilidadMalo { 
  // Malo
  mensaje1 = '';

  enviar1() {
    console.log('Mensaje enviado:', this.mensaje);
  }

  // Bueno
  mensaje = '';
  tamanoTexto = 'text-base';
  modoExperto = signal(false);
  ultimoGuardado = signal('Nunca');

  toggleModoExperto() {
    this.modoExperto.update(v => !v);
  }

  insertarPlantilla(event: any) {
    const value = event.target.value;

    const plantillas: any = {
      saludo: 'Estimado/a,\n\nEspero que se encuentre bien.\n',
      recordatorio: 'Recordatorio:\nNo olvide revisar el siguiente pendiente...\n',
      despedida: 'Saludos cordiales,\n\n'
    };

    if (plantillas[value]) {
      this.mensaje += '\n' + plantillas[value];
    }
  }

  autoGuardar() {
    const fecha = new Date().toLocaleTimeString();
    this.ultimoGuardado.set(fecha);
  }

  enviar() {
    alert('Mensaje enviado');
  }

  limpiar() {
    this.mensaje = '';
  }

  @HostListener('document:keydown', ['$event'])
  manejarAtajos(event: KeyboardEvent) {
    if (!this.modoExperto()) return;

    if (event.ctrlKey && event.key === 'Enter') {
      this.enviar();
    }

    if (event.ctrlKey && event.key.toLowerCase() === 'l') {
      this.limpiar();
    }
  }
}
