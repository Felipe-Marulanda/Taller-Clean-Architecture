import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../../domain/models/order.model';
import { OrderRepository } from '../../../domain/repositories/order.repository';
@Injectable() export class GetAllOrdersUseCase { private repository = inject(OrderRepository); execute(count: number): Observable<Order[]> { return this.repository.getAll(count); } }
