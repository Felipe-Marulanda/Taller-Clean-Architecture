import { Router } from 'express';
import { GetAllOrdersUseCase } from '../../../application/usecases/get-all-orders.usecase';
import { OrderDatasource } from '../../datasources/order.datasource';
import { OrderRepositoryImpl } from '../../repositories/order.repository.impl';
import { OrdersController } from '../controllers/orders.controller';

export class OrdersRoutes {
  static get routes(): Router {
    const router = Router();
    const repository = new OrderRepositoryImpl(new OrderDatasource());
    const controller = new OrdersController(new GetAllOrdersUseCase(repository));
    /**
     * @openapi
     * /api/orders/{countOrders}:
     *   get:
     *     summary: Obtener listado de órdenes
     *     tags: [Orders]
     *     parameters:
     *       - in: path
     *         name: countOrders
     *         required: true
     *         schema: { type: integer, minimum: 1 }
     *     responses:
     *       200:
     *         description: Lista de órdenes generadas
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items: { $ref: '#/components/schemas/Order' }
     */
    router.get('/:countOrders', controller.getAllOrders);
    return router;
  }
}
