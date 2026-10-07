import { Request, Response } from 'express';
import { GetAllCategoriesUseCase } from '../../../application/usecases/get-all-categories.usecase';
import { HandleError } from '../erros/handle.error';

export class CategoriesController {
  constructor(private getAllCategoriesUseCase: GetAllCategoriesUseCase) {}

  getAllCategories = (req: Request, res: Response): void => {
    this.getAllCategoriesUseCase
      .execute(Number(req.params.countCategories))
      .then((categories) => res.status(200).json(categories))
      .catch((error) => HandleError.error(error, res));
  };
}
