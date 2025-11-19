// estado-sistema-malo.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderHeuristicaComponent } from '../../../../components/header-heuristicaComponent/header-heuristicaComponent';
import { EstadoSistemaBueno } from '../estadoSistemaBueno/estadoSistemaBueno';


@Component({
  selector: 'app-estado-sistema',
  standalone: true,
  imports: [CommonModule, FormsModule,HeaderHeuristicaComponent,EstadoSistemaBueno],
  template: `

    <app-header-heuristica 
  numeroHeuristica="1"
  titulo="Visibilidad del Estado del Sistema"
  concepto="El sistema debe mantener a los usuarios informados sobre lo que está ocurriendo, proporcionando retroalimentación apropiada dentro de un tiempo razonable. Los usuarios nunca deben preguntarse qué está pasando en el sistema.">
  </app-header-heuristica>

    <div class="p-6 max-w-md mx-auto bg-white rounded shadow">
      <h2 class="text-xl mb-4">Subir Archivo</h2>
      
      <!-- Sin indicadores de estado -->
      <input type="file" (change)="onFileSelect($event)" class="mb-4">
      
      <!-- Botón sin feedback visual -->
      <button (click)="uploadFile()" class="bg-blue-500 text-white px-4 py-2 rounded">
        Subir
      </button>
      
      <!-- Sin mostrar progreso -->
      <div class="mt-4">
        <p>Resultado aparecerá aquí...</p>
      </div>
    </div>
    <app-estado-sistema-bueno></app-estado-sistema-bueno>
  `
})
export class EstadoSistema {
  selectedFile: File | null = null;
  
  onFileSelect(event: any) {
    this.selectedFile = event.target.files[0];
  }
  
  uploadFile() {
    if (!this.selectedFile) return;
    
    // Simula subida - SIN FEEDBACK AL USUARIO
    setTimeout(() => {
      console.log('Archivo subido');
    }, 3000);
  }
}