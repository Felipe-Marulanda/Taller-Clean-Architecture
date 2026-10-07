import { Post } from '../../domain/models/post.model';
import { PostRepository } from '../../domain/repositories/post.repository';

export class GetAllPostsUseCase {
  constructor(private postRepository: PostRepository) {}

  execute(countPosts: number): Promise<Post[]> {
    return this.postRepository.getAll(countPosts);
  }
}
