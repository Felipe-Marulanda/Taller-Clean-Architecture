import { Request, Response } from 'express';
import { GetAllPostsUseCase } from '../../../application/usecases/get-all-posts.usecase';
import { HandleError } from '../erros/handle.error';

export class PostsController {
  constructor(private getAllPostsUseCase: GetAllPostsUseCase) {}

  getAllPosts = (req: Request, res: Response): void => {
    this.getAllPostsUseCase
      .execute(Number(req.params.countPosts))
      .then((posts) => res.status(200).json(posts))
      .catch((error) => HandleError.error(error, res));
  };
}
