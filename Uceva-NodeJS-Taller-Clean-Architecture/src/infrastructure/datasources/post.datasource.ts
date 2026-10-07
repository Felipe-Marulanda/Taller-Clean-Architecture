import { faker } from '@faker-js/faker';
import { Post } from '../../domain/models/post.model';

export class PostDatasource {
  async getAll(countPosts: number): Promise<Post[]> {
    return Array.from({ length: countPosts }, (_, index) => ({
      id: index + 1,
      title: faker.book.title(),
      content: faker.lorem.paragraph(),
      author: faker.person.fullName(),
    }));
  }
}
