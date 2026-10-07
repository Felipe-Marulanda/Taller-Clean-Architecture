import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { Order } from '../../../domain/models/order.model';
import { OrderRepository } from '../../../domain/repositories/order.repository';
@Injectable() export class OrderLocalRepositoryImpl extends OrderRepository {
 private dataService = inject(DataService);
 getAll(count: number): Observable<Order[]> { return this.dataService.getAllOrdersLocal(count); }
}
