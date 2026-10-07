import { Routes } from '@angular/router';
import { OrdersPage } from './presentation/pages/orders/orders.page';
import { CategoriesPage } from './presentation/pages/categories/categories.page';
import { PostsPage } from './presentation/pages/posts/posts.page';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * Incluye:
 * - Rutas de navegación principales
 * - Redirección por defecto para rutas no existentes
 *
 */
export const routes: Routes = [

  { path: 'orders', component: OrdersPage },
  { path: 'categories', component: CategoriesPage },
  { path: 'posts', component: PostsPage },

  /**
   * Ruta comodín.
   *
   * @remarks
   * Captura cualquier ruta no definida y redirige
   * automáticamente a la ruta de órdenes.
   */
  { path: '**', redirectTo: 'orders' },
];