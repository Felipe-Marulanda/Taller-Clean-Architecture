import { Order } from '../../domain/models/order.model';
import { OrderRepository } from '../../domain/repositories/order.repository';

export class GetAllOrdersUseCase {
  constructor(private orderRepository: OrderRepository) {}

  execute(countOrders: number): Promise<Order[]> {
    return this.orderRepository.getAll(countOrders);
  }
}
