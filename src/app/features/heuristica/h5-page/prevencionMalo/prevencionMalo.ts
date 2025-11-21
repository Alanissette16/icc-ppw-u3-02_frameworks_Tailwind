import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderHeuristicaComponent } from '../../../../components/header-heuristicaComponent/header-heuristicaComponent';

@Component({
  selector: 'app-prevencion-malo',
  standalone: true,
  imports: [CommonModule, FormsModule,HeaderHeuristicaComponent],
  templateUrl: './prevencionMalo.html'
})
export class PrevencionMalo {
  // Malo
  accountNumber1 = '';
  amount1 = '';
  
  transfer1() {
    // Sin validaciones - permite errores críticos
    console.log('Transferencia realizada');
  }

  // Bueno
  accountNumber = '';
  amount: number = 0;
  
  accountValid = signal<boolean | null>(null);
  processing = signal(false);
  
  validateAccount() {
    const cleaned = this.accountNumber.replace(/[^0-9]/g, '');
    if (cleaned.length <= 16) {
      const formatted = cleaned.replace(/(.{4})/g, '$1-').replace(/-$/, '');
      this.accountNumber = formatted;
    }
    this.accountValid.set(cleaned.length === 16);
  }
  
  validateAmount() {
    // Validación automática por HTML5 constraints
  }
  
  readyToTransfer(): boolean {
    return this.accountValid() === true && this.amount > 0 && this.amount <= 10000;
  }
  
  transfer() {
    if (!this.readyToTransfer()) return;
    
    const confirmMessage = this.amount > 5000 
      ? `¿Confirmar transferencia de $${this.amount}? MONTO ALTO - Esta acción no se puede deshacer.`
      : `¿Confirmar transferencia de $${this.amount}?`;
      
    if (confirm(confirmMessage)) {
      this.processing.set(true);
      setTimeout(() => {
        this.processing.set(false);
        alert('Transferencia completada');
      }, 2000);
    }
  }
}