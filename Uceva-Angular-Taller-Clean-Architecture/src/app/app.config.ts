import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { OrderRepository } from './core/domain/repositories/order.repository';
import { CategoryRepository } from './core/domain/repositories/category.repository';
import { PostRepository } from './core/domain/repositories/post.repository';
import { OrderLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/order-local.repository.impl';
import { CategoryLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/category-local.repository.impl';
import { PostLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/post-local.repository.impl';
import { OrderNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/order-node.repository.impl';
import { CategoryNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/category-node.repository.impl';
import { PostNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/post-node.repository.impl';
import { OrderSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/order-springboot.repository.impl';
import { CategorySpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/category-springboot.repository.impl';
import { PostSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/post-springboot.repository.impl';

/**
 * Configuración principal de la aplicación Angular.
 *
 * @remarks
 * Este objeto define los *providers* globales utilizados
 * en el arranque de la aplicación mediante la API
 * `bootstrapApplication`.
 *
 * Incluye:
 * - Manejo global de errores del navegador
 * - Configuración de detección de cambios
 * - Sistema de enrutamiento
 * - Cliente HTTP con interceptores
 *
 * @see {@link bootstrapApplication}
 */
export const appConfig: ApplicationConfig = {

  /**
   * Proveedores globales de la aplicación.
   *
   * @remarks
   * Se registran servicios y configuraciones esenciales
   * que estarán disponibles en toda la aplicación.
   */
  providers: [

    //Local Providers
    { provide: OrderRepository, useClass: OrderLocalRepositoryImpl },
    { provide: CategoryRepository, useClass: CategoryLocalRepositoryImpl },
    { provide: PostRepository, useClass: PostLocalRepositoryImpl },
    
    // Para consumir Node.js, sustituir los tres providers anteriores por:
    // { provide: OrderRepository, useClass: OrderNodeRepositoryImpl },
    // { provide: CategoryRepository, useClass: CategoryNodeRepositoryImpl },
    // { provide: PostRepository, useClass: PostNodeRepositoryImpl },
    //
    // Para consumir Spring Boot, sustituirlos por:
    // { provide: OrderRepository, useClass: OrderSpringBootRepositoryImpl },
    // { provide: CategoryRepository, useClass: CategorySpringBootRepositoryImpl },
    // { provide: PostRepository, useClass: PostSpringBootRepositoryImpl },

    /**
     * Proveedor de listeners globales de errores del navegador.
     *
     * @remarks
     * Captura errores no controlados y eventos globales,
     * permitiendo un manejo centralizado de excepciones.
     */
    provideBrowserGlobalErrorListeners(),

    /**
     * Configuración de la detección de cambios basada en Zone.js.
     *
     * @remarks
     * `eventCoalescing: true` agrupa múltiples eventos en un
     * solo ciclo de detección de cambios, mejorando
     * el rendimiento de la aplicación.
     */
    provideZoneChangeDetection({ eventCoalescing: true }),

    /**
     * Proveedor del sistema de enrutamiento.
     *
     * @remarks
     * Registra las rutas definidas en `routes`
     * para la navegación de la aplicación.
     *
     * @see {@link routes}
     */
    provideRouter(routes),

    provideHttpClient(),
  ]
};