import { Post } from '../../domain/models/post.model';
import { PostRepository } from '../../domain/repositories/post.repository';
import { PostDatasource } from '../datasources/post.datasource';

export class PostRepositoryImpl extends PostRepository {
  constructor(private datasource: PostDatasource) {
    super();
  }

  getAll(countPosts: number): Promise<Post[]> {
    return this.datasource.getAll(countPosts);
  }
}
