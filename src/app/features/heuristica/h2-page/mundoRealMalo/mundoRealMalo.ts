import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { HeaderHeuristicaComponent } from '../../../../components/header-heuristicaComponent/header-heuristicaComponent';


@Component({
  selector: 'app-mundo-real-malo',
  standalone: true,
  imports: [CommonModule,HeaderHeuristicaComponent],
  templateUrl: './mundoRealMalo.html' 
})
export class MundoRealMalo {
  // Malo
  lastOperation1 = signal('');
  
  executeOperation1(op: string) {
    this.lastOperation1.set(`Ejecutado: ${op}`);
  }
// Bueno
  lastOperation = signal('');
  
  executeOperation(action: string) {
    this.lastOperation.set(action);
  }
  
}