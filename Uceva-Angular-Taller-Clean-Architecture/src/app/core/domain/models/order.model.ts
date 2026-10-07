export type OrderStatus = 'Pending' | 'Paid' | 'Shipped' | 'Delivered';
export interface Order { id: number; customerName: string; total: number; status: OrderStatus; }
