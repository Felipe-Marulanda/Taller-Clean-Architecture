export type OrderStatus = 'Pendiente' | 'Pagada' | 'Enviada' | 'Entregada';
export interface Order { id: number; customerName: string; total: number; status: OrderStatus; }
