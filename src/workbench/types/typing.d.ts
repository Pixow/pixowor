export enum Order {
  DESC = "desc",
  ASC = "asc",
}

export interface OrderCondition {
  name: string;
  field: string;
  order: Order;
}
