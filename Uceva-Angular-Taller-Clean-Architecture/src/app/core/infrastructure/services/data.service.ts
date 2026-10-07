import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Category } from '../../domain/models/category.model';
import { Order, OrderStatus } from '../../domain/models/order.model';
import { Post } from '../../domain/models/post.model';

@Injectable({ providedIn: 'root' })
export class DataService {
  private readonly httpClient = inject(HttpClient);
  private readonly nodeUrl = `${environment.baseUrlNode}/api`;
  private readonly springBootUrl = `${environment.baseUrlSpringBoot}/api`;

  getAllOrdersLocal(count: number): Observable<Order[]> {
    const statuses: OrderStatus[] = ['Pending', 'Paid', 'Shipped', 'Delivered'];
    return of(Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      customerName: faker.person.fullName(),
      total: Number(faker.commerce.price({ min: 10, max: 500, dec: 2 })),
      status: faker.helpers.arrayElement(statuses),
    })));
  }

  getAllCategoriesLocal(count: number): Observable<Category[]> {
    return of(Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      name: faker.commerce.department(),
      description: faker.commerce.productDescription(),
    })));
  }

  getAllPostsLocal(count: number): Observable<Post[]> {
    return of(Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      author: faker.person.fullName(),
    })));
  }

  getAllOrdersNode(count: number): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`${this.nodeUrl}/orders/${count}`);
  }

  getAllCategoriesNode(count: number): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.nodeUrl}/categories/${count}`);
  }

  getAllPostsNode(count: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.nodeUrl}/posts/${count}`);
  }

  getAllOrdersSpringBoot(count: number): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`${this.springBootUrl}/orders/${count}`);
  }

  getAllCategoriesSpringBoot(count: number): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.springBootUrl}/categories/${count}`);
  }

  getAllPostsSpringBoot(count: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.springBootUrl}/posts/${count}`);
  }
}
