import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

/**
 * Componente raíz de la aplicación.
 *
 * @remarks
 * Este componente actúa como punto de entrada principal
 * de la aplicación Angular y define su estructura base.
 *
 * Es responsable de:
 * - Inicializar el layout general
 * - Mostrar el menú de navegación
 * - Renderizar las vistas según el sistema de rutas
 *
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [RouterLink, RouterOutlet],
})
export class App {
}