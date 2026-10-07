import { Category } from '../../domain/models/category.model';

export class CategoryDatasource {
  private readonly categoryNames = ['Tecnología', 'Hogar', 'Deportes', 'Libros', 'Música'];

  async getAll(countCategories: number): Promise<Category[]> {
    return Array.from({ length: countCategories }, (_, index) => ({
      id: index + 1,
      name: this.categoryNames[index % this.categoryNames.length] ?? 'Tecnología',
      description: `Artículos y novedades de ${(this.categoryNames[index % this.categoryNames.length] ?? 'Tecnología').toLowerCase()}.`,
    }));
  }
}
