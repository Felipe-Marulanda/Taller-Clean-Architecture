import { Request, Response } from 'express';
import { GetAllOrdersUseCase } from '../../../application/usecases/get-all-orders.usecase';
import { HandleError } from '../erros/handle.error';

export class OrdersController {
  constructor(private getAllOrdersUseCase: GetAllOrdersUseCase) {}

  getAllOrders = (req: Request, res: Response): void => {
    this.getAllOrdersUseCase
      .execute(Number(req.params.countOrders))
      .then((orders) => res.status(200).json(orders))
      .catch((error) => HandleError.error(error, res));
  };
}
