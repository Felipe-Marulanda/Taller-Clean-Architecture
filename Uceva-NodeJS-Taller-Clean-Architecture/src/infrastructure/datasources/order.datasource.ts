import { faker } from '@faker-js/faker';
import { Order, OrderStatus } from '../../domain/models/order.model';

export class OrderDatasource {
  private readonly statuses: OrderStatus[] = ['Pendiente', 'Pagada', 'Enviada', 'Entregada'];
  private readonly customers = ['María Gómez', 'Carlos Rodríguez', 'Laura Martínez'];

  async getAll(countOrders: number): Promise<Order[]> {
    return Array.from({ length: countOrders }, (_, index) => ({
      id: index + 1,
      customerName: this.customers[index % this.customers.length] ?? 'María Gómez',
      total: faker.number.float({ min: 20, max: 2000, fractionDigits: 2 }),
      status: faker.helpers.arrayElement(this.statuses),
    }));
  }
}
