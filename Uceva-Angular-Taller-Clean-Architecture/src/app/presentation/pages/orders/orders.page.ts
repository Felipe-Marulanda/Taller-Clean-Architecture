import { Component, inject } from '@angular/core';
import { GetAllOrdersUseCase } from '../../../core/application/usecases/orders/get-all-orders.usecase';
import { Order } from '../../../core/domain/models/order.model';
import { AlertComponent } from '../../components/alert/alert.component';
import { OrdersTableComponent } from '../../components/orders-table/orders-table.component';
import { State } from '../../interfaces/state.interface';
@Component({selector:'app-orders', templateUrl:'./orders.page.html', imports:[OrdersTableComponent, AlertComponent], providers:[GetAllOrdersUseCase]})
export class OrdersPage { orders: Order[] = []; state: State = 'init'; private useCase = inject(GetAllOrdersUseCase); ngOnInit(): void { this.state='loading'; this.useCase.execute(10).subscribe({next: value => { this.orders=value; this.state='success'; }, error: () => this.state='error'}); } }
