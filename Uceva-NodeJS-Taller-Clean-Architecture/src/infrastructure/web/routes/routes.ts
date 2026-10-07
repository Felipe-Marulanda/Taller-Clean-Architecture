import { Router } from "express";
import { OrdersRoutes } from "./orders.routes";
import { CategoriesRoutes } from "./categories.routes";
import { PostsRoutes } from "./posts.routes";

/**
 * Clase encargada de centralizar todas las rutas de la aplicación.
 *
 * @remarks
 * Proporciona un único punto de acceso a los endpoints
 * del backend, agrupando los módulos del taller.
 *
 * @example
 * ```ts
 * import express from 'express';
 * import { AppRoutes } from './app.routes';
 *
 * const app = express();
 * app.use(AppRoutes.routes);
 * ```
 */
export class AppRoutes {

  /**
   * Devuelve el router principal de la aplicación.
   *
   * @returns Router de Express con todas las rutas registradas
   */
  static get routes(): Router {
    const router = Router();

    // Definir rutas
    router.use("/api/orders", OrdersRoutes.routes);
    router.use("/api/categories", CategoriesRoutes.routes);
    router.use("/api/posts", PostsRoutes.routes);

    return router;
  }
}