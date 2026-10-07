import { Component, Input } from '@angular/core'; import { CommonModule, CurrencyPipe } from '@angular/common'; import { Order } from '../../../core/domain/models/order.model';
@Component({selector:'app-orders-table', templateUrl:'./orders-table.component.html', imports:[CommonModule, CurrencyPipe]}) export class OrdersTableComponent { @Input() orders: Order[] = []; }
