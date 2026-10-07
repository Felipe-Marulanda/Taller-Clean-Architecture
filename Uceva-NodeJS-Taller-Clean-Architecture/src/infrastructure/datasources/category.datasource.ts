import { faker } from '@faker-js/faker';
import { Category } from '../../domain/models/category.model';

export class CategoryDatasource {
  async getAll(countCategories: number): Promise<Category[]> {
    return Array.from({ length: countCategories }, (_, index) => ({
      id: index + 1,
      name: faker.commerce.department(),
      description: faker.lorem.sentence(),
    }));
  }
}
