import { Post } from '../models/post.model';

export abstract class PostRepository {
  abstract getAll(countPosts: number): Promise<Post[]>;
}
