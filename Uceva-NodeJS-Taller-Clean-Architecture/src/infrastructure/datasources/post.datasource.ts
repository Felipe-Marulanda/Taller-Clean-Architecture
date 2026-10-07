import { Post } from '../../domain/models/post.model';

export class PostDatasource {
  private readonly titles = ['Arquitectura limpia', 'Buenas prácticas de software', 'Diseño de aplicaciones'];
  private readonly authors = ['María Gómez', 'Carlos Rodríguez', 'Laura Martínez'];

  async getAll(countPosts: number): Promise<Post[]> {
    return Array.from({ length: countPosts }, (_, index) => ({
      id: index + 1,
      title: this.titles[index % this.titles.length] ?? 'Arquitectura limpia',
      content: 'Contenido de ejemplo para el taller de Arquitectura de Software.',
      author: this.authors[index % this.authors.length] ?? 'María Gómez',
    }));
  }
}
