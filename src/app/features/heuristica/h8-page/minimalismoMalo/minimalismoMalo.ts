import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderHeuristicaComponent } from '../../../../components/header-heuristicaComponent/header-heuristicaComponent';

@Component({
  selector: 'app-minimalismo-malo',
  imports: [FormsModule,CommonModule,HeaderHeuristicaComponent],
  templateUrl: `./minimalismoMalo.html`,
  //styleUrl: './minimalismoMalo.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinimalismoMalo {
  avanzado = signal(false);

  toggleAvanzado() {
    this.avanzado.update(v => !v);
  }
 }
