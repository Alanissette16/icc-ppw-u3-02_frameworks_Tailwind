import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderHeuristicaComponent } from '../../../../components/header-heuristicaComponent/header-heuristicaComponent';

@Component({
  selector: 'app-consistencia-malo',
  standalone: true,
  imports: [CommonModule, HeaderHeuristicaComponent],
  templateUrl: './consistenciaMalo.html' 
})
export class ConsistenciaMalo {}