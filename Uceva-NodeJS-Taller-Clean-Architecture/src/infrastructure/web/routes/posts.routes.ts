import { Router } from 'express';
import { GetAllPostsUseCase } from '../../../application/usecases/get-all-posts.usecase';
import { PostDatasource } from '../../datasources/post.datasource';
import { PostRepositoryImpl } from '../../repositories/post.repository.impl';
import { PostsController } from '../controllers/posts.controller';

export class PostsRoutes {
  static get routes(): Router {
    const router = Router();
    const repository = new PostRepositoryImpl(new PostDatasource());
    const controller = new PostsController(new GetAllPostsUseCase(repository));
    /**
     * @openapi
     * /api/posts/{countPosts}:
     *   get:
     *     summary: Obtener listado de publicaciones
     *     tags: [Posts]
     *     parameters:
     *       - in: path
     *         name: countPosts
     *         required: true
     *         schema: { type: integer, minimum: 1 }
     *     responses:
     *       200:
     *         description: Lista de publicaciones generadas
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items: { $ref: '#/components/schemas/Post' }
     */
    router.get('/:countPosts', controller.getAllPosts);
    return router;
  }
}
