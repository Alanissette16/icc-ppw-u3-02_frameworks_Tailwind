import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderHeuristicaComponent } from "./components/header-heuristicaComponent/header-heuristicaComponent";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderHeuristicaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('02-ui-componentes');
}
